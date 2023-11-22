import React, {useState} from 'react';
import "../CSS/LoginSignup.css";
import "../CSS/Contact.css"
function Contact() {
    const [buttonColor, setButtonColor] = useState(false);

    function handleOver() {
      setButtonColor(true);
    }
  
    function handleOut() {
      setButtonColor(false);
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Contact</h1>
                <form className="loginsignup-fields">
                    <label>
                        <input type="text" name="name" placeholder="Name" />
                    </label>
                    <label>
                        <input type="text" name="email" placeholder="Email" />
                    </label>
                    <label>
                        <textarea name="message" placeholder="Leave a message" rows="7"cols={53} />
                    </label>
                    <div className="loginsignup-buttons">
                        <input onMouseOver={handleOver} onMouseOut={handleOut}
                        style={{ background: buttonColor ? "#2a74eb" : "#f72d66" }}
                        className="button-submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;