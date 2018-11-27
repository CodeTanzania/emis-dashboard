import './style.css';


export default function popupContent({ name, description, startedAt, incidentType }) {
    return (
      `<div class="popupContent">
          <div id="iw-container">
            <div class="iw-title">`+
               name + 
            `</div>
            <div class="iw-content">
              <table >
                <tbody>
                  <tr><td>Incident</td><td id="popupData">` + name +`</td></tr>
                  <tr><td>Type</td><td id="popupData">` + incidentType.name +`</td></tr>
                  <tr><td>Time of Call</td><td id="popupData">` + startedAt +`</td></tr>
                  <tr><td>Description</td><td id="popupData"> ` + description +`</td></tr>
                </tbody></table>
            </div>
        </div>
      </div>`
    )
  }