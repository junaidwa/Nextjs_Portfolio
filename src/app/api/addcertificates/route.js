
export async function POST(request) {
    try {
        const data = await request.json();
        console.log('Received Certificate data:', data);
        // Here you would typically add code to save the certificate data to a database
        return new Response(JSON.stringify({ message: 'Certificate added successfully', certificate: data }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error adding Certificate:', error);
        return new Response(JSON.stringify({ message: 'Failed to add Certificate', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
