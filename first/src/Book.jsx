import React, { Component } from "react";
import './Book.css';

class Book extends Component {
  render() {
    return (
      <>
        <div className="container">
          <center>
            <form>
              <fieldset>
                <legend>
                  <h1>Slam Book</h1>
                </legend>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="nick">NickName:</label>
                  <input type="text" id="nick" name="nickname" />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea rows={3} cols={4} id="address" name="address"></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input type="number" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="memories">Memories:</label>
                  <input type="text" id="memories" name="memories" />
                </div>

                <div className="form-group">
                  <label>Gender:</label>
                  <label htmlFor="male">
                    <input type="radio" name="gender" value="male" id="male" />
                    Male
                  </label>
                  <label htmlFor="female">
                    <input type="radio" name="gender" value="female" id="female" />
                    Female
                  </label>
                </div>

                <div className="form-group">
                  <label>Favourite Actress:</label>
                  <input type="checkbox" id="sri" name="actress" value="Sri" />
                  <label htmlFor="sri">
                    
                    Sri
                  </label>
                    <input type="checkbox" id="devi" name="actress" value="Devi" />
                  <label htmlFor="devi">
                    Devi
                  </label>
                    <input type="checkbox" id="priya" name="actress" value="Priya" />
                  <label htmlFor="priya">
                    Priya
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="school">School:</label>
                  <select id="school" name="school">
                    <option value="ABC">ABC</option>
                    <option value="XYZ">XYZ</option>
                    <option value="KEC">KEC</option>
                  </select>
                </div>

                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
              </fieldset>
            </form>
          </center>
        </div>
      </>
    );
  }
}

export default Book;
