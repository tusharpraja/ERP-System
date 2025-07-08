import React from 'react';
import { Card, Table, Button, Badge, Form, Row, Col } from 'react-bootstrap';
import { FiDownload, FiFilter, FiSearch, FiPrinter } from 'react-icons/fi';

const DailyReport = () => {
  // Sample data from your screenshot
  const reportData = [
    {
      date: 'Tuesday, 04/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'JFAPOL/F',
      taskDescription: 'ASDFSDFSD',
      complication: 'REAERAW',
      link: 'Click to view Link',
      remarks: 'FASDFASDF'
    },
    {
      date: 'Wednesday, 05/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'sv',
      taskDescription: 'czgs',
      complication: 'vss',
      link: 'Click to view Link',
      remarks: 'svs'
    },
    {
      date: 'Wednesday, 12/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'chat',
      taskDescription: 'Improve the chat',
      complication: 'solve issues',
      link: 'No Link attached',
      remarks: 'all good'
    },
    {
      date: 'Wednesday, 12/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'Leave',
      taskDescription: 'approved leave',
      complication: '',
      link: 'No Link attached',
      remarks: 'ok'
    },
    {
      date: 'Wednesday, 12/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'UI',
      taskDescription: 'Improve UI of emp',
      complication: 'Routing issue',
      link: 'No Link attached',
      remarks: 'fix all routes'
    },
    {
      date: 'Monday, 17/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'sfrr',
      taskDescription: 'dff',
      complication: 'edr',
      link: 'No Link attached',
      remarks: 'sfsff'
    },
    {
      date: 'Monday, 24/03/2025',
      createdBy: 'Demo Emp',
      manager: 'demo.manager@munc.in',
      taskTitle: 'iyulop',
      taskDescription: 'yulolop',
      complication: '',
      link: 'No Link attached',
      remarks: 'jiloop'
    }
  ];

  return (
    <div className="p-4">
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Daily Reports</h4>
          <div>
            <Button variant="outline-primary" size="sm" className="me-2">
              <FiDownload className="me-1" /> Export
            </Button>
            <Button variant="outline-secondary" size="sm">
              <FiPrinter className="me-1" /> Print
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <div className="input-group">
                  <Form.Control type="text" placeholder="Search reports..." />
                  <Button variant="outline-secondary">
                    <FiSearch />
                  </Button>
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Select>
                  <option>Filter by Date</option>
                  <option>Last 7 days</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Select>
                  <option>Filter by Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>With Issues</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Task Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Link</th>
                  <th>Remarks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.date}</td>
                    <td>{report.taskTitle}</td>
                    <td>{report.taskDescription}</td>
                    <td>
                      <Badge 
                        bg={report.complication ? 'warning' : 'success'}
                        className="text-capitalize"
                      >
                        {report.complication ? 'With Issues' : 'Completed'}
                      </Badge>
                    </td>
                    <td>
                      {report.link.includes('Click') ? (
                        <a href="#">{report.link}</a>
                      ) : (
                        report.link
                      )}
                    </td>
                    <td>{report.remarks}</td>
                    <td>
                      <Button variant="outline-primary" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-muted">
              Showing 1 to {reportData.length} of {reportData.length} entries
            </div>
            <div>
              <Button variant="outline-secondary" size="sm" className="me-2">
                Previous
              </Button>
              <Button variant="outline-secondary" size="sm">
                Next
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h5>Generate New Report</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="taskTitle">
                  <Form.Label>Task Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter task title" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="taskDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="taskDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="taskComplication" className="mb-3">
              <Form.Label>Complications (if any)</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group controlId="taskLink" className="mb-3">
              <Form.Label>Attach Link</Form.Label>
              <Form.Control type="url" placeholder="https://example.com" />
            </Form.Group>
            <Form.Group controlId="taskRemarks" className="mb-3">
              <Form.Label>Remarks</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Report
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DailyReport;