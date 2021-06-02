import { Button } from "@material-ui/core";


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    const paths = data.map(beasiswa => {
        return {
            params: {id: beasiswa.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps =  async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + id);
    const data = await res.json();
    console.log(res)
    return {
        props: { beasiswa: data }
    }
}

const Details = ({ beasiswa }) => {
    return (  
    <div >
        <h1 className="text-3xl m-10">Detail Beasiswa</h1>
        <div className="detail">
            <h3 className="text-2xl m-5">{ beasiswa.name }</h3>
            <p className="text-base m-5">{ beasiswa.email }</p>
            <p className="text-base m-5">{ beasiswa.body }</p>
        </div>

        <h1 className="text-3xl m-10">Persyaratan Beasiswa</h1>
        <div className="detail">
            <h3 className="text-2xl m-5">{ beasiswa.name }</h3>
            <p className="text-base m-5">{ beasiswa.email }</p>
            <p className="text-base m-5">{ beasiswa.body }</p>
            <Button >Daftar</Button>
        </div>
    </div>
        
    );
}

export default Details;