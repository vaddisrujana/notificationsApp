const Notification = (props) => {
    const {text, class}=props;
    return(
        <p className={class}>{text}</p>
    )
};

const element = (
  <div class="background">
    <h1 class="head">Notifications</h1>
    <div class="background1">
    <div class="background2">
        <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" class="image"/>
        <Notification text="Information Message" class="blue" />
    </div>
    <div class="background2">
        <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" class="image"/>
        <Notification text="Success Message" class="green" />
    </div>
    <div class="background2">
        <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" class="image"/>
        <Notification text="Warning Message" class="yellow" />
    </div>
    <div class="background2">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" class="image"/>
        <Notification text="Error Message" class="red" />
    </div>
      
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
