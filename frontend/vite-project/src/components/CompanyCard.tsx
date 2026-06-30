import { getCompanies } from "../Services/CompanyService";
import { useEffect, useState } from "react";
import type { Company } from "../types/company";

function CompanyCard() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCompanies() {
            try {
                const data = await getCompanies();
                setCompanies(data);
            } finally {
                setLoading(false);
            }
        }

        void fetchCompanies();
    }, []);

    return (
        <section>
            <h2>Companies</h2>
            {loading ? (
                <p>Loading companies...</p>
            ) : companies.length === 0 ? (
                <p>No companies found.</p>
            ) : (
                <ul>
                    {companies.map((company) => (
                        <div key={company.id}>
                            <h1>{company.name}</h1>
                            <p>{company.email}</p>
                            <p>{company.phone}</p>
                            <p>{company.location}</p>
                        </div>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default CompanyCard;