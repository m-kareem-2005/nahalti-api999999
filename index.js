*const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// بيانات لوحة التحكم لمشروع نحلتي - كريم نعيم
app.get('/api/dashboard', (req, res) => {
    res.json({
        owner: "Kareem Naim",
        totalHives: 24,
        seasonalYieldKg: 480,
        hives: [
            { id: "KN-01", statusAr: "نشطة وسليمة", statusEn: "Active & Healthy", healthState: "optimal", honeyMaturity: 78, temperature: 34.5, humidity: 62 },
            { id: "KN-02", statusAr: "تحت الملاحظة", statusEn: "Under Observation", healthState: "warning", honeyMaturity: 45, temperature: 36.2, humidity: 58 }
        ]
    });
});

app.get('/', (req, res) => {
    res.send('Nahalti API is Live and Running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
