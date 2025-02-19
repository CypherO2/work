import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

export default function TableComp() {
  return (
    <>
      <MDBTable responsive className="text-light py-auto">
        <MDBTableHead className="fw-bold fs-4">
          <tr>
            <th scope="col">Command(s)</th>
            <th scope="col">Description</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody className="fs-6">
          <tr>
            <td>/help</td>
            <td>Displays the help menu - contains a list of commands.</td>
          </tr>
          <tr>
            <td>/runtime</td>
            <td>Shows how long the bot has been online.</td>
          </tr>
          {/* <tr>
            <td>/watchlist_add {"{streamer_name}"}</td>
            <td>
              Adds a Twitch streamer to the list of streamers to alert when they
              go Live.
            </td>
          </tr>
          <tr>
            <td>/watchlist_remove {"{streamer_name}"}</td>
            <td>
              Removes a Twitch streamer from the list of streamers to alert when
              they go Live.
            </td>
          </tr> */}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
