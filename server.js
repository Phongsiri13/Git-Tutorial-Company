const express = require('express');
const app = express();
const port = 3000;

// API Endpoint สำหรับทดสอบ
app.get('/api/test', (req, res) => {
    console.log('Hello world');
    console.log('Hello Git!');
    console.log('opopopopopopopopopopopopopopopopopopopopop');
    res.status(200).json({
        message: 'Hello, Git! This is a test API.',
        status: 'success',
        timestamp: new Date().toISOString()
    });
});

// เริ่มรันเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});