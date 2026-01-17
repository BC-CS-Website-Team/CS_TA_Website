
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export default function csvAdmin() {
    return {
        name: 'vite-plugin-csv-admin',
        configureServer(server) {
            server.middlewares.use('/api/admin/data', async (req, res, next) => {
                try {
                    const filePath = path.resolve(__dirname, 'public/data/team.csv');

                    if (req.method === 'GET') {
                        if (fs.existsSync(filePath)) {
                            const csvContent = fs.readFileSync(filePath, 'utf-8');
                            const { data } = Papa.parse(csvContent, { header: true, dynamicTyping: true });
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify(data));
                        } else {
                            res.statusCode = 404;
                            res.end(JSON.stringify({ error: 'File not found' }));
                        }
                    } else if (req.method === 'POST') {
                        let body = '';
                        req.on('data', chunk => {
                            body += chunk.toString();
                        });

                        req.on('end', () => {
                            try {
                                const jsonData = JSON.parse(body);
                                // Convert JSON back to CSV
                                const csv = Papa.unparse(jsonData);
                                fs.writeFileSync(filePath, csv, 'utf-8');
                                res.setHeader('Content-Type', 'application/json');
                                res.end(JSON.stringify({ success: true }));
                            } catch (parseError) {
                                res.statusCode = 400;
                                res.end(JSON.stringify({ error: 'Invalid JSON body' }));
                            }
                        });
                    } else {
                        next();
                    }
                } catch (error) {
                    console.error('CSV Admin Plugin Error:', error);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                }
            });
        },
    };
}
