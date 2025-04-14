import Head from "next/head";

const AppHead = ({ title, children = <></> }) => {
  const appTitleName = `${title} | Go Programming Hub`;
  return (
    <>
      <Head>
        <title>{appTitleName}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           document.addEventListener('DOMContentLoaded', function() {
      // Find all tab containers on the page
      const tabContainers = document.querySelectorAll('.tabs-container');
      
      // Initialize each tab container
      tabContainers.forEach(container => {
        initTabGroup(container);
      });
      
      // Function to initialize a single tab group
      function initTabGroup(container) {
        const groupId = container.dataset.tabsGroup;
        const tabButtons = container.querySelectorAll('.tab-button');
        const tabContents = container.querySelectorAll('.tab-content');
        const tabIndicator = container.querySelector('.tab-indicator');
        
        // Set initial indicator position and width for this group
        function setIndicator(element) {
          tabIndicator.style.width = element.offsetWidth + 'px';
          tabIndicator.style.left = element.offsetLeft + 'px';
        }
        
        // Initialize the indicator on the active tab of this group
        const activeTabButton = container.querySelector('.tab-button.active');
        if (activeTabButton) {
          setIndicator(activeTabButton);
        }
        
        // Add click event listeners to tab buttons in this group
        tabButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Remove active class from all buttons and contents in this group
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Move the indicator
            setIndicator(button);
          });
        });
        
        // Update indicator when window resizes
        window.addEventListener('resize', function() {
          const currentActiveButton = container.querySelector('.tab-button.active');
          if (currentActiveButton) {
            setIndicator(currentActiveButton);
          }
        });
      }
    });
        `,
          }}
        />
        {children}
      </Head>
    </>
  );
};

export default AppHead;
