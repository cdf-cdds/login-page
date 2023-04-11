import { useState } from 'react'
import { useSession } from "next-auth/react"
import { getSession } from "next-auth/react"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Dashboard() {
    const { status } = useSession({
        required: true
    })

    let fetchUrl = encodeURI(process.env.NEXT_PUBLIC_API_ENDPOINT + "/companies")
    const [data, setData] = useState([''])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState('')

    const handleClick = async () => {
        setIsLoading(true);
        const session = await getSession()
    
        try {
          const response = await fetch(fetchUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization' : session.bearerToken
            },
          });
    
          if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
          }
    
          const result = await response.json();
        
          setData(result);
        } catch (err) {
          setErr(err.message);
        } finally {
          setIsLoading(false);
        }
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
        >        
            <div key="Dashboard">
                {err && <h2>{err}</h2>}

                <Button 
                    variant="contained" 
                    size="large" 
                    onClick={handleClick}
                >
                    List Companies
                </Button>

                {isLoading && <h2>Loading...</h2>}
            </div>
            {data.map(company => {
                return (
                    <div key={company.company_id}>
                        <p>ID: {company.company_id}</p>
                        <p>Name: {company.company_name}</p>
                    </div>
                );
            })}
        </Grid>
    )
}



