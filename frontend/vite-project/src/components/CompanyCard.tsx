
import type { Company } from "../types/company";

type Props = {
    companies: Company[];
};
function CompanyCard({ companies }: Props) {
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
                            <h1>{company.name}</h1>
                            <p>{company.email}</p>
                            <p>{company.phone}</p>
                            <p>{company.location}</p>
                        </div>
                    ))}
            
        </section>
    );
}

export default CompanyCard;