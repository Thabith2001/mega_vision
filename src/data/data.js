export const links = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/contact', name: 'Contact'},
    {path: '/blog', name: 'Blog'},
    {path: '/services', name: 'services',dropdown: [
            { name: 'Installation', path: '#installation', description: 'Professional camera setup' },
            { name: 'Maintenance', path: '#maintenance', description: 'Regular system checks' },
            { name: 'Consultation', path: '#consultation', description: 'Security assessment' },
            { name: 'System Upgrade', path: '#upgrade', description: 'Modernize your system' },
            { name: 'Remote Monitoring', path: '#monitoring', description: '24/7 surveillance service' },
            { name: 'Training', path: '#training', description: 'System operation training' }
        ]},
    {path: '/products', name: 'Products',dropdown: [
            { name: 'IP Cameras', path: '#ip-cameras', description: 'High-resolution network cameras' },
            { name: 'Analog Cameras', path: '#analog-cameras', description: 'Traditional security cameras' },
            { name: 'PTZ Cameras', path: '#ptz-cameras', description: 'Pan-Tilt-Zoom cameras' },
            { name: 'Dome Cameras', path: '#dome-cameras', description: 'Indoor & outdoor domes' },
            { name: 'Bullet Cameras', path: '#bullet-cameras', description: 'Long-range surveillance' },
            { name: 'NVR Systems', path: '#nvr', description: 'Network video recorders' },
            { name: 'DVR Systems', path: '#dvr', description: 'Digital video recorders' }
        ]},
    {path: '/accessories', name: 'Accessories'},

]