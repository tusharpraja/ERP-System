import React, { useState, useEffect } from 'react';
import styles from './Weekend.module.css';

const Weekend = () => {
  const [weekendSettings, setWeekendSettings] = useState({
    sunday: { active: true, frequency: 'all' },
    monday: { active: false, frequency: '' },
    tuesday: { active: false, frequency: '' },
    wednesday: { active: false, frequency: '' },
    thursday: { active: false, frequency: '' },
    friday: { active: false, frequency: '' },
    saturday: { active: true, frequency: 'all' }
  });

  const [isDemoMode, setIsDemoMode] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true
      };
      setCurrentDateTime(now.toLocaleDateString('en-US', options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDemoMode = () => setIsDemoMode(!isDemoMode);

  const handleToggleDay = (day) => {
    if (isDemoMode) return;
    
    setWeekendSettings(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        active: !prev[day].active,
        frequency: !prev[day].active ? 'all' : ''
      }
    }));
  };

  const handleFrequencyChange = (day, frequency) => {
    if (isDemoMode) return;
    setWeekendSettings(prev => ({
      ...prev,
      [day]: { ...prev[day], frequency }
    }));
  };

  const handleSaveSettings = () => {
    if (isDemoMode) return;
    console.log('Saving weekend settings:', weekendSettings);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const days = [
    { name: 'sunday', label: 'Sunday' },
    { name: 'monday', label: 'Monday' },
    { name: 'tuesday', label: 'Tuesday' },
    { name: 'wednesday', label: 'Wednesday' },
    { name: 'thursday', label: 'Thursday' },
    { name: 'friday', label: 'Friday' },
    { name: 'saturday', label: 'Saturday' }
  ];

  const frequencyOptions = [
    { value: '', label: 'Select Frequency' },
    { value: 'odd', label: 'Odd Weekends' },
    { value: 'even', label: 'Even Weekends' },
    { value: '1st', label: '1st' },
    { value: '2nd', label: '2nd' },
    { value: '3rd', label: '3rd' },
    { value: '4th', label: '4th' },
    { value: '5th', label: '5th' },
    { value: 'all', label: 'All' }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h5 className={styles.headerTitle}>Weekend Settings</h5>
            <p className={styles.headerSubtitle}>
              You can view and set weekoff for the calendar
            </p>
          </div>
          <div>
            <button 
              className={styles.demoModeButton}
              onClick={toggleDemoMode}
            >
              {isDemoMode ? 'Demo Mode: ON' : 'Demo Mode: OFF'}
              <span className={`${styles.demoIndicator} ${isDemoMode ? styles.demoOn : styles.demoOff}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Weekend Day Cards */}
        <div className={styles.dayGrid}>
          {days.map((day) => (
            <div 
              key={day.name} 
              className={`${styles.dayCard} ${
                weekendSettings[day.name].active 
                  ? styles.dayCardActive 
                  : styles.dayCardInactive
              }`}
            >
              <div className={styles.dayHeader}>
                <span className={`${styles.dayName} ${
                  weekendSettings[day.name].active 
                    ? styles.dayNameActive 
                    : styles.dayNameInactive
                }`}>
                  {day.label}
                </span>
                <div className={styles.toggleSwitch}>
                  <input 
                    type="checkbox" 
                    id={`toggle-${day.name}`}
                    className={styles.toggleInput}
                    checked={weekendSettings[day.name].active}
                    onChange={() => handleToggleDay(day.name)}
                    disabled={isDemoMode}
                  />
                  <label 
                    htmlFor={`toggle-${day.name}`} 
                    className={styles.toggleTrack}
                  ></label>
                  <span className={styles.toggleThumb}></span>
                </div>
              </div>
              
              {weekendSettings[day.name].active ? (
                <div>
                  <div className={styles.frequencyLabel}>Frequency</div>
                  <select
                    className={styles.frequencySelect}
                    value={weekendSettings[day.name].frequency}
                    onChange={(e) => handleFrequencyChange(day.name, e.target.value)}
                    disabled={isDemoMode}
                  >
                    {frequencyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button 
                    onClick={() => setActiveDay(day)}
                    className={styles.advancedButton}
                    disabled={isDemoMode}
                  >
                    Advanced Settings
                  </button>
                </div>
              ) : (
                <div className={styles.deactivatedState}>
                  De-Activated
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Mode Warning */}
        {isDemoMode && (
          <div className={styles.demoWarning}>
            <div className={styles.warningContent}>
              <svg 
                className={`${styles.warningIcon} h-5 w-5`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
              </svg>
              <div className={styles.warningText}>
                Weekend modification is not allowed in demo mode, contact administration
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className={styles.actionButtons}>
          <button
            className={styles.primaryButton}
            onClick={() => setShowConfirmModal(true)}
            disabled={isDemoMode}
          >
            Save Settings
          </button>
          <button
            className={styles.secondaryButton}
            disabled={isDemoMode}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Confirm Weekend Settings</h3>
            <p className={styles.modalMessage}>
              Are you sure you want to save these weekend settings? This will affect the calendar availability.
            </p>
            <div className={styles.modalActions}>
              <button 
                className={styles.secondaryButton}
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
              <button 
                className={styles.primaryButton}
                onClick={() => {
                  handleSaveSettings();
                  setShowConfirmModal(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className={styles.toast}>
          <svg 
            className={styles.toastIcon} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Settings saved successfully!
        </div>
      )}

      {/* Day Settings Modal */}
      {activeDay && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                {days.find(d => d.name === activeDay.name)?.label} Settings
              </h3>
              <button 
                onClick={() => setActiveDay(null)}
                className={styles.modalCloseButton}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.modalField}>
                <label className={styles.modalLabel}>
                  Status
                </label>
                <div className={styles.modalValue}>
                  <span className={`${styles.statusIndicator} ${
                    weekendSettings[activeDay.name].active 
                      ? styles.statusActive 
                      : styles.statusInactive
                  }`}></span>
                  {weekendSettings[activeDay.name].active 
                    ? 'Active (Weekend)' 
                    : 'Inactive (Working Day)'}
                </div>
              </div>
              
              <div className={styles.modalField}>
                <label className={styles.modalLabel}>
                  Frequency
                </label>
                <select
                  className={styles.modalSelect}
                  value={weekendSettings[activeDay.name].frequency}
                  onChange={(e) => handleFrequencyChange(activeDay.name, e.target.value)}
                  disabled={!weekendSettings[activeDay.name].active || isDemoMode}
                >
                  {frequencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.primaryButton}
                onClick={() => setActiveDay(null)}
                disabled={isDemoMode}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weekend;