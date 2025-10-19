
export async function POST(request) {
    try {
        const data = await request.json();
        console.log('Received project data:', data);
        // Here you would typically add code to save the project data to a database
        return new Response(JSON.stringify({ message: 'Project added successfully', project: data }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error adding project:', error);
        return new Response(JSON.stringify({ message: 'Failed to add project', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
