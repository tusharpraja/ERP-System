import React from 'react';

const MySalarySlip = () => {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      padding: '24px',
      maxWidth: '1400px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ 
          color: '#3a0ca3', 
          fontSize: '26px',
          fontWeight: '600',
          marginBottom: '6px'
        }}>
          Salary Slips
        </h1>
        
        <p style={{ 
          color: '#666',
          fontSize: '16px',
          fontWeight: '400',
          margin: '0'
        }}>
          You can view your Salary Slips here
        </p>
      </header>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: '1',
        padding: '40px 0'
      }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '60px',
          marginBottom: '40px'
        }}>
          {/* Light blue background circle */}
          <div style={{
            backgroundColor: '#e8f4ff',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            position: 'absolute',
            zIndex: '0'
          }}></div>
          
          {/* Mobile phone with error icon */}
          <div style={{
            position: 'relative',
            zIndex: '1',
            marginRight: '10px'
          }}>
            {/* Phone outline */}
            <div style={{
              width: '70px',
              height: '130px',
              backgroundColor: '#ffffff',
              border: '3px solid #2a6f97',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '5px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              {/* Phone screen */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}>
                {/* Error circle icon */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ff4a4a',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '22px',
                  fontWeight: 'bold'
                }}>
                  ✕
                </div>
              </div>
            </div>
          </div>
          
          {/* Document icon */}
          <div style={{
            position: 'relative',
            zIndex: '1',
            marginLeft: '10px'
          }}>
            {/* Document icon */}
            <div style={{
              width: '80px',
              height: '100px',
              backgroundColor: '#ffcb42',
              borderRadius: '5px',
              position: 'relative',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '15px 10px'
            }}>
              {/* Document fold */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '20px',
                height: '20px',
                backgroundColor: '#fff3b0',
                borderBottomLeftRadius: '5px'
              }}></div>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '0 20px 20px 0',
                borderColor: 'transparent #ffcb42 transparent transparent'
              }}></div>
              
              {/* Document lines */}
              <div style={{
                width: '80%',
                height: '4px',
                backgroundColor: '#ffffff',
                marginBottom: '8px',
                borderRadius: '2px'
              }}></div>
              <div style={{
                width: '60%',
                height: '4px',
                backgroundColor: '#ffffff',
                marginBottom: '8px',
                borderRadius: '2px'
              }}></div>
              <div style={{
                width: '70%',
                height: '4px',
                backgroundColor: '#ffffff',
                borderRadius: '2px'
              }}></div>
            </div>
          </div>
        </div>
        
        {/* Alert icon with text */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
          backgroundColor: '#fff3f3',
          padding: '12px 20px',
          borderRadius: '6px',
          border: '1px solid #ffdddd'
        }}>
          {/* Alert icon */}
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#ff4a4a',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>!</div>
          
          <p style={{
            fontSize: '16px',
            color: '#444',
            margin: '0',
            fontWeight: '500'
          }}>
            Salary has not been processed yet. Contact HR for details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MySalarySlip;