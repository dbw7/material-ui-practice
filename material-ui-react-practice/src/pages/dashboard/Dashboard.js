import { Button } from '@mui/material';
import Table from '../../components/Table/Table';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className='dashboard-main'>
            <div className='data'>
                <Button sx={{float:"right"}} variant="contained">Monitor A Class</Button>
                <Table></Table>
            </div>
        </div>
    )
}

export default Dashboard;