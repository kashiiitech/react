import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "Pakistan",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""

  })

  function changeHandler(event) {
    // desctructuring the values
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked: value
    }) )

  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally Printing the value of Form Data");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First name</label>
        <br></br>
        <input type="text" name="firstName" id="firstName" placeholder="Kashif" value={formData.firstName} onChange={changeHandler} className="outline" />
        <br></br>
        <label htmlFor="lastName">Last name</label>
        <br></br>
        <input type="text" name="lastName" id="lastName" placeholder="Ali" value={formData.lastName} onChange={changeHandler} className="outline" />
        <br></br>
        <label htmlFor="email">Email Address</label>
        <br></br>
        <input type="email" name="email" id="email" placeholder="kashiiitech@gmail.com" value={formData.email} onChange={changeHandler} className="outline" />
        <br></br>
        <labe htmlFor="country">Country</labe>
        <br></br>
        <select
          id="country"
          name="country"
          value={formData.country}
          className="outline"
          onChange={changeHandler}
        >
          <option>Pakistan</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>


        <br></br>
        <label htmlFor="streetAddress">Street Address</label>
        <br></br>
        <input type="text" name="streetAddress" id="streetAddress" placeholder="R331 Sector 17-A" value={formData.streetAddress} onChange={changeHandler} className="outline" />

        <br></br>
        <label htmlFor="city">City</label>
        <br></br>
        <input type="text" name="city" id="city" placeholder="Karachi" value={formData.city} onChange={changeHandler} className="outline" />

        <br></br>
        <label htmlFor="state">State / Province</label>
        <br></br>
        <input type="text" name="state" id="state" placeholder="Sindh" value={formData.state} onChange={changeHandler} className="outline" />

        <br></br>
        <label htmlFor="postalCode">Postal Code</label>
        <br></br>
        <input type="text" name="postalCode" id="postalCode" placeholder="110077" value={formData.postalCode} onChange={changeHandler} className="outline" />


        <br></br>
        <br></br>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input id="comments" name="comments" type="checkbox" checked={formData.comments} onChange={changeHandler} />
            <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comment on a post.</p>
          </div>
          </div>
          <div className="flex flex-row">
            <input id="candidates" name="candidates" type="checkbox" checked={formData.candidates} onChange={changeHandler} />
            <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
          </div>
          <div className="flex flex-row">
            <input id="offers" name="offers" type="checkbox" checked={formData.offers} onChange={changeHandler} />
            <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
          </div>
          
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered vis SMS to your mobile phone.</p>

          <br></br>

        <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler} />
        <label id="pushEverything">Everything</label>
        <br></br>
        <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email" onChange={changeHandler} />
        <label id="pushEmail">Same as email</label>
        <br></br>
        <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notification" onChange={changeHandler} />
        <label id="pushNothing">No Push Notifications</label>

        <br></br>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
        </fieldset>

        


      </form>
    </div>
  );
}

export default App;
