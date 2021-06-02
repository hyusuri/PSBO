import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;

export default async (req, res) => {
	if (req.method !== 'POST') {
		res.status(400).send({ message: 'Only POST requests allowed' })
		return
	}
	
	const response = await fetch(
		'https://api.ipb.ac.id/v1/Authentication/LoginMahasiswa',
		{
			body: JSON.stringify({
				'Username': req.body.username,
				'Password': req.body.password
			}),
			headers: {
				'X-IPBAPI-TOKEN': 'Bearer d46d5926-b9e5-33ad-86df-6c60a9d23bee',
				'Content-Type': 'application/json'
			},
			method: 'POST'
		}
		);
	const data = await response.json();
	console.log(data)
	if (!data.Error) {
		const payload = {
			MahasiswaId: data.MahasiswaId,
			Nama: data.Nama,
			NIM: data.NIM,
			Mayor: data.Mayor,
			KodeStrata: data.KodeStrata
		};
		let token_jwt = jwt.sign(payload, KEY,
			// 1 day in seconds
			{expiresIn: 86400,},
			);
		res.status(200).json({
			success: true,
			token: token_jwt});
		}
		else{
			res.status(400).json(data);
		}

	};