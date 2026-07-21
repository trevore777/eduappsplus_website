import {redirect} from "next/navigation";
import {isAdmin} from "../../../../lib/auth";
import AppForm from "../../../../components/AppForm";
export default async function NewApp(){
 if(!await isAdmin()) redirect("/admin/login");
 return <div className="adminWrap"><div className="panel"><h1>Add New App</h1><AppForm action="/api/admin/apps"/></div></div>;
}
