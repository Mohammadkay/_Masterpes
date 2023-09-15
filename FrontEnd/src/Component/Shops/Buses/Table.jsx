import { useEffect, useState, useContext } from 'react'
import { createStyles, Table, ScrollArea, UnstyledButton, Group, Text, Center, TextInput, rem, Container } from '@mantine/core'
import { keys } from '@mantine/utils'
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react'
import axios from 'axios'
import { AdminInfoContext } from '../../../context/AdminInfoProvider'
import Delete from './Delete'
import CustomPagination from './CustomPagination'

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    icon: {
        width: rem(21),
        height: rem(21),
        borderRadius: rem(21),
    },
}));

function Th({ children, reversed, sorted, onSort }) {
    const { classes } = useStyles();
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size="0.9rem" stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
}

function filterData(data, search) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(item).some((key) => {
            const value = item[key];
            if (typeof value === 'string') {
                return value.toLowerCase().includes(query);
            }
            return false;
        })
    );
}

function sortData(data, payload) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

export default function TableSort() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);
    const { adminInfo, setAdminInfo, PAGE_SHOW } = useContext(AdminInfoContext)
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }).reverse());
    };

    //Show Table Date in Page When entering the page, the data is hidden until sort is done. The solution to this problem is this code
    useEffect(() => {
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search }).reverse());
    }, [data, sortBy, reverseSortDirection, search]);

    //Get all Data 
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/shop/buses/', {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            });
            setData(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData()
    }, []);

    //Pagination Product
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = PAGE_SHOW
    const lastIndex = currentPage * recordsPerPage
    const firstlndex = lastIndex - recordsPerPage
    const records = sortedData.slice(firstlndex, lastIndex);
    const npage = Math.ceil(sortedData.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)



    const rows = records.map((row) => (
        <tr key={row._id}>
            <td>{row.user && row.user.username ? row.user.username : 'Admin'}</td>
            <td>{row.phone}</td>
            <td><img src={row.image.url} alt='image car rental' width='70' height='70' /></td>
            <td>{row.nameProduct}</td>
            <td>{row.location}</td>
            <td>{row.kilometres}</td>
            <td>{row.description}</td>
            <td>{row.price}</td>
            <td>{row.transmissionType}</td>
            <td>{row.fuelType}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={() => setDeleteId(row._id)} data-bs-toggle="modal" data-bs-target="#delete">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr >
    ));


    return (
        <Container size="xl" style={{ paddingTop: '20px' }}>
            <Delete deleteId={deleteId} adminInfo={adminInfo} fetchData={fetchData} />

            <ScrollArea>
                <TextInput
                    placeholder="Search by any field"
                    mb="md"
                    icon={<IconSearch size="0.9rem" stroke={1.5} />}
                    value={search}
                    onChange={handleSearchChange}
                />
                <Table horizontalSpacing="md" verticalSpacing="xs" w={1500} sx={{ tableLayout: 'scroll' }}>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>

                            <th>
                                Phone
                            </th>

                            <th>
                                image
                            </th>

                            <th>
                                Name Product
                            </th>

                            <th>
                                Location
                            </th>

                            <th>
                                kilometres
                            </th>

                            <th>
                                Description
                            </th>

                            <th>
                                Price
                            </th>

                            <th>
                                Transmission Type
                            </th>

                            <th>
                                Fuel Type
                            </th>

                            <th>
                                Procedures
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
                <CustomPagination pageNmbers={numbers} setCurrentPage={setCurrentPage} />
            </ScrollArea>
        </Container>
    );
}
