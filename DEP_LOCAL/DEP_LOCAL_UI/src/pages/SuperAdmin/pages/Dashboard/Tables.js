import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoursePendingForAprroval from './CoursePendingForApproval';
import RecentClientsWithSubcription from './RecentClientsWithSubcription';
import CourseDetails from './CourseDetails';
import ClientDetails from './ClientDetails/ClientDetails';

const Tables = () =>{
    return(
        <div>
            <Container>
                
                    <Col >
                    <ClientDetails/>
                    </Col>

                    <Col >
                     <CoursePendingForAprroval/>
                    </Col>

                    <Col >
                        <RecentClientsWithSubcription/>
                    </Col>

                    <Col>
                    <CourseDetails/>
                    </Col>
                
            </Container>
        </div>
    )


}
export default Tables