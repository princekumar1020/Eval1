const Ispeed = () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        width: '100%', // Full viewport width
        margin: 0, // Ensure no margins are affecting the layout
        padding: 0, // Remove padding if there is any
        backgroundColor: '#f0f0f0', // Optional background color
        overflow: 'hidden' // Prevent scrollbars if not needed
      }}>
        <iframe
          id="wifi-main"
          src="https://www.metercustom.net/plugin/?th=w"
          style={{
            border: 'none',
            width: '100%', // Take up the full width of the container
            height: '100%' // Take up the full height of the container
          }}
          title="WiFi Speed Test"
        ></iframe>
      </div>
    );
  };
  
  export default Ispeed;
  