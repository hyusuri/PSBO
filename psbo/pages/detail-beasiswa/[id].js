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
        <div>
            <h1>Detail Beasiswa</h1>
            <p>{ beasiswa.name }</p>
            <p>{ beasiswa.email }</p>
            <p>{ beasiswa.body }</p>
        </div>
    );
}

export default Details;