import AdminNavbar from "../../Headers/AdminNavbar";
import { ThemeProvider} from "@material-ui/core/styles";
import Theme from "../../Theme";

const ViewReport = () => {
    return ( 
        <div>
            <ThemeProvider theme={Theme}>
                <AdminNavbar/>
            </ThemeProvider>
            
        </div>
     );
}
 
export default ViewReport;