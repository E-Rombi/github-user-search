import dayjs from 'dayjs';

type Params = {
    date: string;
}

export const formatDate = ({date}: Params) => {
    return dayjs(date).format('DD/MM/YYYY');
}