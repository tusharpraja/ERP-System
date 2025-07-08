import React, { useState } from 'react';
import { 
  CButton, 
  CBadge, 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormTextarea,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CAlert
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { 
  cilCheckCircle, 
  cilXCircle, 
  cilArrowCircleRight, 
  cilTask, 
  cilChatBubble,
  cilUser,
  cilCalendar,
  cilClock,
  cilInfo
} from '@coreui/icons';

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 'TASK-122',
      title: 'Complete dashboard redesign',
      description: 'Redesign the admin dashboard with new UI components and improved user experience',
      priority: 'High',
      status: 'In Progress',
      startDate: '20th, Mar 2025',
      endDate: '20th, Mar 2025',
      duration: 0,
      createdAt: '29 days ago',
      updatedAt: '25 days ago',
      lead: 'Demo Manager',
      comments: [
        { user: 'John Doe', text: 'Please prioritize this task', time: '2 hours ago' },
        { user: 'You', text: 'Working on it', time: '1 hour ago' }
      ]
    },
    {
      id: 'TASK-116',
      title: 'Implement user authentication',
      description: 'Add JWT authentication to the API endpoints',
      priority: 'Medium',
      status: 'In Review',
      startDate: '17th, Mar 2025',
      endDate: '20th, Mar 2025',
      duration: 3,
      createdAt: '17 Mar 2025',
      updatedAt: '29 days ago',
      lead: 'Demo Manager',
      comments: []
    }
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [viewMode, setViewMode] = useState('card');

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask({ ...selectedTask, status: newStatus });
    }
  };

  const addComment = () => {
    if (!newComment.trim()) return;
    
    const updatedTasks = tasks.map(task => {
      if (task.id === selectedTask.id) {
        return {
          ...task,
          comments: [
            ...task.comments,
            { user: 'You', text: newComment, time: 'Just now' }
          ]
        };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    setSelectedTask({
      ...selectedTask,
      comments: [
        ...selectedTask.comments,
        { user: 'You', text: newComment, time: 'Just now' }
      ]
    });
    setNewComment('');
  };

  const filteredTasks = tasks.filter(task => {
    const statusMatch = statusFilter === 'All' || task.status === statusFilter;
    const priorityMatch = priorityFilter === 'All' || task.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  const statusCounts = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, { 'All': tasks.length });

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div className="d-flex gap-2 flex-wrap">
          <CButton 
            color={statusFilter === 'All' ? 'primary' : 'light'} 
            onClick={() => setStatusFilter('All')}
          >
            All <CBadge color="light" className="ms-1">{statusCounts['All']}</CBadge>
          </CButton>
          <CButton 
            color={statusFilter === 'In Progress' ? 'info' : 'light'} 
            onClick={() => setStatusFilter('In Progress')}
          >
            In Progress <CBadge color="light" className="ms-1">{statusCounts['In Progress'] || 0}</CBadge>
          </CButton>
          <CButton 
            color={statusFilter === 'In Review' ? 'warning' : 'light'} 
            onClick={() => setStatusFilter('In Review')}
          >
            In Review <CBadge color="light" className="ms-1">{statusCounts['In Review'] || 0}</CBadge>
          </CButton>
          <CButton 
            color={statusFilter === 'Completed' ? 'success' : 'light'} 
            onClick={() => setStatusFilter('Completed')}
          >
            Completed <CBadge color="light" className="ms-1">{statusCounts['Completed'] || 0}</CBadge>
          </CButton>
        </div>
        
        <div className="d-flex gap-2">
          <CFormSelect 
            size="sm" 
            style={{ width: '120px' }}
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </CFormSelect>
          <CButton 
            color="light" 
            className="border"
            onClick={() => setViewMode(viewMode === 'card' ? 'table' : 'card')}
          >
            {viewMode === 'card' ? 'Table View' : 'Card View'}
          </CButton>
        </div>
      </div>

      {viewMode === 'card' ? (
        <CRow className="g-4">
          {filteredTasks.map((task, index) => (
            <CCol md={6} lg={4} key={index}>
              <CCard 
                className={`task-card ${task.priority.toLowerCase()}-priority`}
                onClick={() => handleTaskClick(task)}
              >
                <CCardHeader className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{task.id}</strong>
                    <CBadge 
                      color={
                        task.priority === 'High' ? 'danger' :
                        task.priority === 'Medium' ? 'warning' : 'secondary'
                      }
                      className="ms-2"
                    >
                      {task.priority}
                    </CBadge>
                  </div>
                  <CBadge color={
                    task.status === 'In Progress' ? 'info' :
                    task.status === 'In Review' ? 'warning' :
                    task.status === 'Completed' ? 'success' : 'secondary'
                  }>
                    {task.status}
                  </CBadge>
                </CCardHeader>
                <CCardBody>
                  <h6 className="mb-3">{task.title}</h6>
                  <div className="task-meta mb-3">
                    <div className="meta-item">
                      <CIcon icon={cilCalendar} className="me-2" />
                      <span>{task.startDate} - {task.endDate}</span>
                    </div>
                    <div className="meta-item">
                      <CIcon icon={cilUser} className="me-2" />
                      <span>{task.lead}</span>
                    </div>
                    <div className="meta-item">
                      <CIcon icon={cilClock} className="me-2" />
                      <span>{task.duration} days</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Updated {task.updatedAt}</small>
                    {task.comments.length > 0 && (
                      <CBadge color="light" className="text-dark">
                        <CIcon icon={cilChatBubble} className="me-1" />
                        {task.comments.length}
                      </CBadge>
                    )}
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Dates</th>
                <th>Lead</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>
                    <CBadge color={
                      task.priority === 'High' ? 'danger' :
                      task.priority === 'Medium' ? 'warning' : 'secondary'
                    }>
                      {task.priority}
                    </CBadge>
                  </td>
                  <td>
                    <CBadge color={
                      task.status === 'In Progress' ? 'info' :
                      task.status === 'In Review' ? 'warning' :
                      task.status === 'Completed' ? 'success' : 'secondary'
                    }>
                      {task.status}
                    </CBadge>
                  </td>
                  <td>{task.startDate} - {task.endDate}</td>
                  <td>{task.lead}</td>
                  <td>
                    <CButton 
                      color="primary" 
                      size="sm"
                      onClick={() => handleTaskClick(task)}
                    >
                      View
                    </CButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Task Detail Modal */}
      {selectedTask && (
        <CModal 
          visible={modalVisible} 
          onClose={() => setModalVisible(false)}
          size="lg"
        >
          <CModalHeader closeButton>
            <CModalTitle>
              {selectedTask.id} - {selectedTask.title}
              <CBadge 
                color={
                  selectedTask.priority === 'High' ? 'danger' :
                  selectedTask.priority === 'Medium' ? 'warning' : 'secondary'
                }
                className="ms-2"
              >
                {selectedTask.priority}
              </CBadge>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div className="mb-4">
              <h6>Description</h6>
              <p>{selectedTask.description}</p>
            </div>
            
            <CRow className="mb-4">
              <CCol md={6}>
                <div className="task-detail-item">
                  <CIcon icon={cilCalendar} className="me-2" />
                  <div>
                    <small className="text-muted">Start Date</small>
                    <p className="mb-0">{selectedTask.startDate}</p>
                  </div>
                </div>
              </CCol>
              <CCol md={6}>
                <div className="task-detail-item">
                  <CIcon icon={cilCalendar} className="me-2" />
                  <div>
                    <small className="text-muted">End Date</small>
                    <p className="mb-0">{selectedTask.endDate}</p>
                  </div>
                </div>
              </CCol>
              <CCol md={6}>
                <div className="task-detail-item">
                  <CIcon icon={cilUser} className="me-2" />
                  <div>
                    <small className="text-muted">Project Lead</small>
                    <p className="mb-0">{selectedTask.lead}</p>
                  </div>
                </div>
              </CCol>
              <CCol md={6}>
                <div className="task-detail-item">
                  <CIcon icon={cilClock} className="me-2" />
                  <div>
                    <small className="text-muted">Duration</small>
                    <p className="mb-0">{selectedTask.duration} days</p>
                  </div>
                </div>
              </CCol>
            </CRow>
            
            <div className="mb-4">
              <h6>Status</h6>
              <div className="d-flex gap-2">
                <CButton 
                  color={selectedTask.status === 'In Progress' ? 'info' : 'light'}
                  onClick={() => handleStatusChange(selectedTask.id, 'In Progress')}
                >
                  <CIcon icon={cilTask} className="me-1" />
                  In Progress
                </CButton>
                <CButton 
                  color={selectedTask.status === 'In Review' ? 'warning' : 'light'}
                  onClick={() => handleStatusChange(selectedTask.id, 'In Review')}
                >
                  <CIcon icon={cilInfo} className="me-1" />
                  In Review
                </CButton>
                <CButton 
                  color={selectedTask.status === 'Completed' ? 'success' : 'light'}
                  onClick={() => handleStatusChange(selectedTask.id, 'Completed')}
                >
                  <CIcon icon={cilCheckCircle} className="me-1" />
                  Complete
                </CButton>
              </div>
            </div>
            
            <div className="mb-4">
              <h6>Comments ({selectedTask.comments.length})</h6>
              <div className="task-comments">
                {selectedTask.comments.length > 0 ? (
                  selectedTask.comments.map((comment, index) => (
                    <div key={index} className="comment-item mb-3">
                      <div className="d-flex justify-content-between">
                        <strong>{comment.user}</strong>
                        <small className="text-muted">{comment.time}</small>
                      </div>
                      <p className="mb-0">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <CAlert color="info">No comments yet</CAlert>
                )}
              </div>
              
              <CForm className="mt-3">
                <CInputGroup>
                  <CFormTextarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </CInputGroup>
                <div className="d-flex justify-content-end mt-2">
                  <CButton 
                    color="primary"
                    onClick={addComment}
                    disabled={!newComment.trim()}
                  >
                    <CIcon icon={cilChatBubble} className="me-1" />
                    Send
                  </CButton>
                </div>
              </CForm>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setModalVisible(false)}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      )}
    </div>
  );
};

export default Task;