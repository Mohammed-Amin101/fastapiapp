
import type { Company } from "../types/company";
import {useState} from "react";

type Props = {
    companies: Company[];
    onedit: (company: Company) => void; 
    ondelete: (id: number) => void;
    onadd: (company: Company) => void;
};
function CompanyCard({ companies, onedit, ondelete, onadd }: Props) {
    const [editCompanyId, setEditCompanyId] = useState<number | null>(null);
    const [editCompany, setEditCompany] = useState<Company | null>(null);
    const [editform, setEditForm] = useState(false);

    const [addform, setAddForm] = useState<Company>({
        id: 0,
        name: "",
        email: "",
        phone: "",
        location: "",
        jobs: []
    });
    const handleAdd = (company: Company) => {
        onadd(company);
        setAddForm({
            id: 0,
            name: "",
            email: "",
            phone: "",
            location: "",
            jobs: []
        });
    };
    const handleEdit = (company: Company) => {
        onedit(company);
        setEditCompany({
            id: company.id,
            name: company.name,
            email: company.email,
            phone: company.phone,
            location: company.location,
            jobs: []
        });
        setEditForm(true);
    };
    const handleDelete = (id: number) => {
        ondelete(id);
    };
    // const [companies, setCompanies] = useState<Company[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     async function fetchCompanies() {
    //         try {
    //             const data = await getCompanies();
    //             setCompanies(data);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     void fetchCompanies();
    // }, []);

    return (
        <section>
            <h2>Companies</h2>
            
                    {companies.map((company) => (
                        <div key={company.id}>
                            <h1>Name: {company.name}</h1>
                            <p>Email: {company.email}</p>
                            <p>Phone: {company.phone}</p>
                            <p>Location: {company.location}</p>
                            <input type="text" value={company.name} onChange={(e) => setEditCompany({ ...editCompany!, name: e.target.value })} />
                            <input type="text" value={company.email} onChange={(e) => setEditCompany({ ...editCompany!, email: e.target.value })} />
                            <input type="text" value={company.phone} onChange={(e) => setEditCompany({ ...editCompany!, phone: e.target.value })} />
                            <input type="text" value={company.location} onChange={(e) => setEditCompany({ ...editCompany!, location: e.target.value })} />
                            <button onClick={() => handleEdit(company)}>Save</button>
                            <button onClick={() => setEditCompanyId(company.id)}>Edit</button>
                            <button onClick={() => handleDelete(company.id)}>Delete</button>

                        </div>
                    ))}
                    <h2>Add Company</h2>
                    <input type="text" value={addform.name} onChange={(e)=>setAddform({...addform,name:e.target.value})} />
                    <input type="text" value={addform.email} onChange={(e)=>setAddform({...addform,email:e.target.value})} />
                    <input type="text" value={addform.phone} onChange={(e)=>setAddform({...addform,phone:e.target.value})} />
                    <input type="text" value={addform.location} onChange={(e)=>setAddform({...addform,location:e.target.value})} />
                    <button onClick={handleAdd}>Add</button>
            
        </section>
    );
}

export default CompanyCard;