import AdminNav from "./AdminNav";
import MentorNav from "./MentorNav";
import MenteeNav from "./MenteeNav";

const RoleNav = () => {
    const admin = JSON.parse(sessionStorage.getItem("active-admin"));
    const mentee = JSON.parse(sessionStorage.getItem("active-mentee"));
    const mentor = JSON.parse(sessionStorage.getItem("active-mentor"));

    if (mentee != null) {
        return <MenteeNav/>;
    } else if (admin != null) {
        return <AdminNav />;
    } else if (mentor!= null) {
        return <MentorNav />;
    } 
    // else {
    //     return <NormalHeader />;
    // }
};

export default RoleNav;