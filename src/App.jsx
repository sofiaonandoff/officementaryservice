import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InitialInfo from './pages/InitialInfo';
/*import WorkspaceInfo from './pages/WorkspaceInfo';
import MeetingRoomInfo from './pages/MeetingRoomInfo';
import AdditionalSpaceInfo from './pages/AdditionalSpaceInfo';
*/
import DesignPreview from './pages/DesignPreview';
import './App.css';

function App() {
  return (
    <Router basename="/officementaryservice">
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <div className="logo">
              <img src="/officementaryservice/officementary_logo.png" alt="officementary" style={{ height: '1em', display: 'block' }} />
            </div>
            <div className="service-intro">다음 정보를 입력해주시면 더 빠르고 정확한 상담을 받으실 수 있습니다.</div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/initial-info" replace />} />
            <Route path="/initial-info" element={<InitialInfo />} />
            <Route path="/design-preview" element={<DesignPreview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
/*
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
                    <Route path="/" element={<InitialInfo />} />

          <Route path="/" element={<Navigate to="/initial-info" replace />} />
          <Route path="/initial-info" element={<InitialInfo />} />
          <Route path="/workspace-info" element={<WorkspaceInfo />} />
          <Route path="/meetingroom-info" element={<MeetingRoomInfo />} />
          <Route path="/additional-space-info" element={<AdditionalSpaceInfo />} />
          <Route path="/design-preview" element={<DesignPreview />} />
        </Routes>
      </div>
    </Router>
  );
}
*/
export default App;
