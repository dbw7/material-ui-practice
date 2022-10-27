import Table from '../../components/Table/Table';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className='dashboard-main'>
            <div className='data'>
                {/* <table className="table">
                    <thead className="sticky-top" id="proxy-identifiers">
                        <tr className="">
                            <th scope="col">#</th>
                            <th scope="col">IP</th>
                            <th scope="col">PORT</th>
                            <th scope="col">USER</th>
                            <th scope="col">PASS</th>
                            <th scope="col">SPEED (MS)</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
            
                    </tbody>
                </table> */}
                <Table></Table>
            </div>
        </div>
    )
}

export default Dashboard;