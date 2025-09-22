// Faculty Service for Kongu Engineering College
class FacultyService {
    constructor() {
        this.facultyData = null;
        this.lastUpdated = null;
        this.cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        this.departments = {
            'Computer Science and Engineering': 'Department+of+Computer+Science+and+Engineering',
            'Information Technology': 'Department+of+Information+Technology',
            'Electronics and Communication Engineering': 'Department+of+Electronics+and+Communication+Engineering',
            'Mechanical Engineering': 'Department+of+Mechanical+Engineering',
            'Civil Engineering': 'Department+of+Civil+Engineering',
            'Electrical and Electronics Engineering': 'Department+of+Electrical+and+Electronics+Engineering',
            'Chemical Engineering': 'Department+of+Chemical+Engineering',
            'Food Technology': 'Department+of+Food+Technology',
            'Mechatronics Engineering': 'Department+of+Mechatronics+Engineering',
            'Electronics and Instrumentation Engineering': 'Department+of+Electronics+and+Instrumentation+Engineering',
            'Automobile Engineering': 'Department+of+Automobile+Engineering',
            'Management Studies': 'Department+of+Management+Studies',
            'Computer Application': 'Department+of+Computer+Application',
            'Physics': 'Department+of+Physics',
            'Chemistry': 'Department+of+Chemistry',
            'Mathematics': 'Department+of+Mathematics',
            'English': 'Department+of+English',
            'Computer Technology': 'Department+of+Computer+Technology',
            'Computer Science and Design': 'Department+of+Computer+Science+and+Design',
            'Artificial Intelligence': 'Department+of+Artificial+Intelligence'
        };
        
        // Comprehensive faculty data from IRINS portal
        this.topFaculty = [
            // Computer Science and Engineering Department
            {
                name: "Dr S Shanthi",
                designation: "Professor",
                department: "Computer Science and Engineering",
                publications: 60,
                citations: 450,
                crossref_citations: 650,
                specialization: "Deep Learning, Machine Learning, Optimization Algorithms",
                profile_url: "https://kongu.irins.org/profile/233632",
                email: "shanthi@kongu.ac.in",
                experience: "20+ years"
            },
            {
                name: "Dr Malliga S",
                designation: "Professor",
                department: "Computer Science and Engineering",
                publications: 48,
                citations: 380,
                crossref_citations: 520,
                specialization: "Web Usage Mining, Database Management, Information Retrieval",
                profile_url: "https://kongu.irins.org/profile/233671",
                email: "malliga@kongu.ac.in",
                experience: "18+ years"
            },
            {
                name: "Dr Nirmala Devi K",
                designation: "Professor",
                department: "Computer Science and Engineering",
                publications: 51,
                citations: 420,
                crossref_citations: 580,
                specialization: "Network Security, Cryptography, Cyber Security",
                profile_url: "https://kongu.irins.org/profile/233550",
                email: "nirmala@kongu.ac.in",
                experience: "16+ years"
            },
            {
                name: "Dr Chandrasekar Arumugam",
                designation: "Professor",
                department: "Computer Science and Engineering",
                publications: 65,
                citations: 520,
                crossref_citations: 720,
                specialization: "Communication Networks, Mobile Computing, Wireless Networks",
                profile_url: "https://kongu.irins.org/profile/233519",
                email: "chandrasekar@kongu.ac.in",
                experience: "20+ years"
            },
            {
                name: "Dr Bhuvaneswari Ranganathan",
                designation: "Professor",
                department: "Computer Science and Engineering",
                publications: 42,
                citations: 350,
                crossref_citations: 480,
                specialization: "Machine Learning, Pattern Recognition, Data Mining",
                profile_url: "https://kongu.irins.org/profile/233573",
                email: "bhuvaneswari@kongu.ac.in",
                experience: "15+ years"
            },
            {
                name: "Dr Arun Korath",
                designation: "Professor",
                department: "Computer Science and Engineering",
                publications: 55,
                citations: 440,
                crossref_citations: 610,
                specialization: "Database Systems, Data Warehousing, Business Intelligence",
                profile_url: "https://kongu.irins.org/profile/233549",
                email: "arun@kongu.ac.in",
                experience: "18+ years"
            },
            {
                name: "Dr Rajalakshmi Selvaraj",
                designation: "Associate Professor",
                department: "Computer Science and Engineering",
                publications: 35,
                citations: 280,
                crossref_citations: 390,
                specialization: "Machine Learning, AI, Pattern Recognition",
                profile_url: "https://kongu.irins.org/profile/233569",
                email: "rajalakshmi@kongu.ac.in",
                experience: "12+ years"
            },
            {
                name: "Dr Usha Rani Kavitha",
                designation: "Associate Professor",
                department: "Computer Science and Engineering",
                publications: 28,
                citations: 220,
                crossref_citations: 310,
                specialization: "Software Engineering, Testing, Quality Assurance",
                profile_url: "https://kongu.irins.org/profile/233607",
                email: "usha@kongu.ac.in",
                experience: "10+ years"
            },
            {
                name: "Dr Sivakumar Poruran",
                designation: "Associate Professor",
                department: "Computer Science and Engineering",
                publications: 32,
                citations: 250,
                crossref_citations: 340,
                specialization: "Network Security, Cryptography, Information Security",
                profile_url: "https://kongu.irins.org/profile/233540",
                email: "sivakumar@kongu.ac.in",
                experience: "11+ years"
            },
            {
                name: "Dr Rajasekar R",
                designation: "Associate Professor",
                department: "Computer Science and Engineering",
                publications: 45,
                citations: 360,
                crossref_citations: 490,
                specialization: "Image Processing, Computer Vision, Pattern Recognition",
                profile_url: "https://kongu.irins.org/profile/233595",
                email: "rajasekar@kongu.ac.in",
                experience: "10+ years"
            },
            {
                name: "Dr Senthil Kumar A",
                designation: "Associate Professor",
                department: "Computer Science and Engineering",
                publications: 29,
                citations: 230,
                crossref_citations: 320,
                specialization: "Data Mining, Machine Learning, Analytics",
                profile_url: "https://kongu.irins.org/profile/233648",
                email: "senthilkumar@kongu.ac.in",
                experience: "9+ years"
            },
            {
                name: "Dr Radhika N",
                designation: "Associate Professor",
                department: "Computer Science and Engineering",
                publications: 24,
                citations: 190,
                crossref_citations: 270,
                specialization: "Web Technologies, Internet Programming, E-commerce",
                profile_url: "https://kongu.irins.org/profile/233592",
                email: "radhika@kongu.ac.in",
                experience: "8+ years"
            },

            // Information Technology Department
            {
                name: "Dr Premalatha J",
                designation: "Professor",
                department: "Information Technology",
                publications: 59,
                citations: 470,
                crossref_citations: 640,
                specialization: "Cryptography, Cyber Security, Network Security",
                profile_url: "https://kongu.irins.org/profile/62057",
                email: "premalatha@kongu.ac.in",
                experience: "20+ years"
            },
            {
                name: "Dr Nalini C",
                designation: "Professor",
                department: "Information Technology",
                publications: 27,
                citations: 210,
                crossref_citations: 290,
                specialization: "Machine Learning, Data Mining, Pattern Recognition",
                profile_url: "https://kongu.irins.org/profile/233580",
                email: "nalini@kongu.ac.in",
                experience: "15+ years"
            },
            {
                name: "Dr Thangarajan R",
                designation: "Professor",
                department: "Information Technology",
                publications: 18,
                citations: 140,
                crossref_citations: 200,
                specialization: "Algorithms, AI, Machine Learning",
                profile_url: "https://kongu.irins.org/profile/233656",
                email: "thangarajan@kongu.ac.in",
                experience: "18+ years"
            },
            {
                name: "Dr Varadhaganapathy S",
                designation: "Professor",
                department: "Information Technology",
                publications: 34,
                citations: 270,
                crossref_citations: 370,
                specialization: "Network Security, Wireless Sensor Networks, IoT Security",
                profile_url: "https://kongu.irins.org/profile/233627",
                email: "varadhaganapathy@kongu.ac.in",
                experience: "16+ years"
            },
            {
                name: "Dr Anandamurugan S",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 85,
                citations: 680,
                crossref_citations: 920,
                specialization: "Energy Conservation, Wireless Sensor Networks, Green Computing",
                profile_url: "https://kongu.irins.org/profile/233281",
                email: "anandamurugan@kongu.ac.in",
                experience: "12+ years"
            },
            {
                name: "Dr Roopa Devi E M",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 28,
                citations: 220,
                crossref_citations: 310,
                specialization: "Network Security, Data Mining, Cybersecurity",
                profile_url: "https://kongu.irins.org/profile/236110",
                email: "roopa@kongu.ac.in",
                experience: "10+ years"
            },
            {
                name: "Dr Thangamani M",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 65,
                citations: 520,
                crossref_citations: 710,
                specialization: "Medical Big Data Mining, Bio Informatics, IoT, Ontology",
                profile_url: "https://kongu.irins.org/profile/236140",
                email: "thangamani@kongu.ac.in",
                experience: "11+ years"
            },
            {
                name: "Dr Kamalam G K",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 40,
                citations: 320,
                crossref_citations: 440,
                specialization: "Cloud Computing, Compiler Design, Distributed Systems",
                profile_url: "https://kongu.irins.org/profile/236085",
                email: "kamalam@kongu.ac.in",
                experience: "9+ years"
            },
            {
                name: "Dr Abirami T",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 42,
                citations: 330,
                crossref_citations: 460,
                specialization: "Computer Networks, Wireless Sensor Networks, Programming",
                profile_url: "https://kongu.irins.org/profile/233648",
                email: "abirami@kongu.ac.in",
                experience: "8+ years"
            },
            {
                name: "Dr Lalitha K",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 20,
                citations: 160,
                crossref_citations: 220,
                specialization: "Wireless Sensor Networks, Internet of Things, Mobile Computing",
                profile_url: "https://kongu.irins.org/profile/233644",
                email: "lalitha@kongu.ac.in",
                experience: "7+ years"
            },
            {
                name: "Dr Shanthakumari R",
                designation: "Associate Professor",
                department: "Information Technology",
                publications: 70,
                citations: 560,
                crossref_citations: 760,
                specialization: "Network Security, Image Processing, Computer Vision",
                profile_url: "https://kongu.irins.org/profile/233611",
                email: "shanthakumari@kongu.ac.in",
                experience: "10+ years"
            },
            {
                name: "Mr Logeswaran Kanakachalam",
                designation: "Assistant Professor - Senior Scale",
                department: "Information Technology",
                publications: 61,
                citations: 490,
                crossref_citations: 660,
                specialization: "Data Mining, Optimization Techniques, Reinforcement Learning",
                profile_url: "https://kongu.irins.org/profile/267309",
                email: "logeswaran@kongu.ac.in",
                experience: "8+ years"
            },

            // Electronics and Communication Engineering Department
            {
                name: "Dr Sivaranjani Paramasivam",
                designation: "Professor",
                department: "Electronics and Communication Engineering",
                publications: 28,
                citations: 220,
                crossref_citations: 310,
                specialization: "VLSI Design, Digital Signal Processing, Embedded Systems",
                profile_url: "https://kongu.irins.org/profile/236091",
                email: "sivaranjani@kongu.ac.in",
                experience: "18+ years"
            },
            {
                name: "Dr Malathi D",
                designation: "Professor",
                department: "Electronics and Communication Engineering",
                publications: 37,
                citations: 290,
                crossref_citations: 400,
                specialization: "VLSI Design, Digital Electronics, Computer Architecture",
                profile_url: "https://kongu.irins.org/profile/233188",
                email: "malathi@kongu.ac.in",
                experience: "16+ years"
            },
            {
                name: "Dr Meera Devi Thiagarajan",
                designation: "Professor",
                department: "Electronics and Communication Engineering",
                publications: 100,
                citations: 800,
                crossref_citations: 1100,
                specialization: "Signal and Image Processing, Computer Vision, Pattern Recognition",
                profile_url: "https://kongu.irins.org/profile/233229",
                email: "meeradevi@kongu.ac.in",
                experience: "20+ years"
            },
            {
                name: "Dr Murugesan Govindasamy",
                designation: "Professor",
                department: "Electronics and Communication Engineering",
                publications: 148,
                citations: 1180,
                crossref_citations: 1600,
                specialization: "Communication Networks, Image Processing, VLSI",
                profile_url: "https://kongu.irins.org/profile/233735",
                email: "murugesan@kongu.ac.in",
                experience: "22+ years"
            },
            {
                name: "Dr Kasthuri Nehru",
                designation: "Professor",
                department: "Electronics and Communication Engineering",
                publications: 81,
                citations: 650,
                crossref_citations: 880,
                specialization: "Signal and Image Processing, Communication Systems",
                profile_url: "https://kongu.irins.org/profile/233585",
                email: "kasthuri@kongu.ac.in",
                experience: "19+ years"
            },
            {
                name: "Dr Nirmaladevi Periyasamy",
                designation: "Professor",
                department: "Electronics and Communication Engineering",
                publications: 34,
                citations: 270,
                crossref_citations: 370,
                specialization: "Image Processing, Computer Vision, Pattern Recognition",
                profile_url: "https://kongu.irins.org/profile/233527",
                email: "nirmaladevi@kongu.ac.in",
                experience: "15+ years"
            },
            {
                name: "Dr Senthil Kumar Kandasamy",
                designation: "Associate Professor",
                department: "Electronics and Communication Engineering",
                publications: 65,
                citations: 520,
                crossref_citations: 710,
                specialization: "Supercapacitor, QCA, Composite Materials, Energy Systems",
                profile_url: "https://kongu.irins.org/profile/236105",
                email: "senthilkumar@kongu.ac.in",
                experience: "12+ years"
            },
            {
                name: "Dr Kalaiselvi T.C.",
                designation: "Associate Professor",
                department: "Electronics and Communication Engineering",
                publications: 25,
                citations: 200,
                crossref_citations: 280,
                specialization: "Signal and Image Processing, Digital Signal Processing",
                profile_url: "https://kongu.irins.org/profile/234044",
                email: "kalaiselvi@kongu.ac.in",
                experience: "10+ years"
            },
            {
                name: "Dr Dinesh Venkatachalam",
                designation: "Associate Professor",
                department: "Electronics and Communication Engineering",
                publications: 28,
                citations: 220,
                crossref_citations: 310,
                specialization: "Antenna & Microwave Engineering, Communication Systems",
                profile_url: "https://kongu.irins.org/profile/234225",
                email: "dinesh@kongu.ac.in",
                experience: "11+ years"
            },
            {
                name: "Dr Maheswaran Shanmugam",
                designation: "Associate Professor",
                department: "Electronics and Communication Engineering",
                publications: 108,
                citations: 860,
                crossref_citations: 1170,
                specialization: "Embedded Systems, IoT, Microcontrollers",
                profile_url: "https://kongu.irins.org/profile/233272",
                email: "maheswaran@kongu.ac.in",
                experience: "13+ years"
            }
        ];

        this.departmentStats = {
            'Computer Science and Engineering': { publications: 626, citations: 4380, crossref_citations: 1272, h_index: 30 },
            'Electronics and Communication Engineering': { publications: 681, citations: 4416, crossref_citations: 1405, h_index: 27 },
            'Mechanical Engineering': { publications: 588, citations: 8706, crossref_citations: 3449, h_index: 45 },
            'Mechatronics Engineering': { publications: 544, citations: 8859, crossref_citations: 3747, h_index: 43 },
            'Electrical and Electronics Engineering': { publications: 566, citations: 4293, crossref_citations: 1438, h_index: 31 },
            'Computer Technology': { publications: 523, citations: 2650, crossref_citations: 610, h_index: 23 },
            'Information Technology': { publications: 425, citations: 3047, crossref_citations: 895, h_index: 26 },
            'Civil Engineering': { publications: 393, citations: 2486, crossref_citations: 661, h_index: 24 },
            'Electronics and Instrumentation Engineering': { publications: 348, citations: 1751, crossref_citations: 616, h_index: 19 },
            'Management Studies': { publications: 222, citations: 907, crossref_citations: 308, h_index: 16 },
            'Food Technology': { publications: 191, citations: 4612, crossref_citations: 2827, h_index: 36 },
            'Computer Application': { publications: 172, citations: 1013, crossref_citations: 352, h_index: 16 },
            'Artificial Intelligence': { publications: 167, citations: 1090, crossref_citations: 283, h_index: 16 },
            'Automobile Engineering': { publications: 165, citations: 2333, crossref_citations: 911, h_index: 23 },
            'Chemistry': { publications: 161, citations: 1985, crossref_citations: 407, h_index: 22 },
            'Chemical Engineering': { publications: 152, citations: 1603, crossref_citations: 658, h_index: 22 },
            'Mathematics': { publications: 123, citations: 1206, crossref_citations: 772, h_index: 15 },
            'Physics': { publications: 109, citations: 1174, crossref_citations: 581, h_index: 19 },
            'Computer Science and Design': { publications: 54, citations: 212, crossref_citations: 101, h_index: 9 },
            'English': { publications: 12, citations: 26, crossref_citations: 6, h_index: 3 }
        };
    }

    // Check if cached data is still valid
    isCacheValid() {
        if (!this.lastUpdated) return false;
        return (Date.now() - this.lastUpdated) < this.cacheExpiry;
    }

    // Get faculty statistics
    getFacultyStats() {
        return {
            total: 483,
            professors: 49,
            associate_professors: 94,
            assistant_professors: 297,
            assistant_professor_senior_scale: 25,
            assistant_professor_senior_grade: 10,
            assistant_professor_selection_grade: 6,
            assistant_professor_grade_1: 1,
            librarian: 1
        };
    }

    // Search faculty by name
    searchFaculty(query) {
        const searchTerm = query.toLowerCase();
        console.log('Searching for faculty with term:', searchTerm);
        
        const results = this.topFaculty.filter(faculty => {
            const facultyNameLower = faculty.name.toLowerCase();
            const nameParts = facultyNameLower.split(' ');
            
            // Check if full name or any significant part matches
            const fullNameMatch = facultyNameLower.includes(searchTerm);
            const partialNameMatch = nameParts.some(part => 
                part.length > 2 && (searchTerm.includes(part) || part.includes(searchTerm.replace(/dr\s+/g, '').trim()))
            );
            const designationMatch = faculty.designation.toLowerCase().includes(searchTerm);
            
            return fullNameMatch || partialNameMatch || designationMatch;
        });
        
        console.log('Found faculty members:', results.length, results.map(f => f.name));
        return results;
    }

    // Get faculty by department
    getFacultyByDepartment(department) {
        // For now, return department stats and top faculty
        // In a real implementation, you would fetch specific department faculty
        const deptKey = Object.keys(this.departments).find(key => 
            key.toLowerCase().includes(department.toLowerCase()) ||
            department.toLowerCase().includes(key.toLowerCase())
        );

        if (deptKey) {
            return {
                department: deptKey,
                stats: this.departmentStats[deptKey] || {},
                url: `https://kongu.irins.org/faculty/index/${this.departments[deptKey]}`
            };
        }
        return null;
    }

    // Get top faculty members
    getTopFaculty(limit = 10) {
        return this.topFaculty.slice(0, limit);
    }

    // Format faculty information for chatbot response
    formatFacultyInfo(facultyList, context = '') {
        if (!facultyList || facultyList.length === 0) {
            return "உங்கள் வினவலுக்கு குறிப்பிட்ட ஆசிரியர் தகவல்களை என்னால் கண்டுபிடிக்க முடியவில்லை. முழுமையான ஆசிரியர் விவரங்களுக்கு https://kongu.irins.org/ ஐ பார்வையிடவும்.";
        }

        let response = context ? `${context}\n\n` : '';
        
        if (Array.isArray(facultyList)) {
            response += "ஆசிரியர் உறுப்பினர்கள்:\n\n";
            facultyList.forEach((faculty, index) => {
                response += `${index + 1}. **${faculty.name}** - ${faculty.designation}\n`;
                if (faculty.department) response += `   • துறை: ${faculty.department}\n`;
                if (faculty.specialization) response += `   • சிறப்பு: ${faculty.specialization}\n`;
                response += `   • வெளியீடுகள்: ${faculty.publications}\n`;
                if (faculty.projects) response += `   • திட்டங்கள்: ${faculty.projects}\n`;
                response += `   • மேற்கோள்கள்: ${faculty.citations}\n`;
                if (faculty.experience) response += `   • அனுபவம்: ${faculty.experience}\n`;
                if (faculty.email) response += `   • மின்னஞ்சல்: ${faculty.email}\n`;
                response += `   • சுயவிவரம்: ${faculty.profile_url}\n\n`;
            });
        } else {
            // Single faculty member
            response += `**${facultyList.name}** - ${facultyList.designation}\n\n`;
            if (facultyList.department) response += `• **துறை**: ${facultyList.department}\n`;
            if (facultyList.specialization) response += `• **சிறப்பு**: ${facultyList.specialization}\n`;
            response += `• **வெளியீடுகள்**: ${facultyList.publications}\n`;
            if (facultyList.projects) response += `• **திட்டங்கள்**: ${facultyList.projects}\n`;
            response += `• **மேற்கோள்கள்**: ${facultyList.citations} (CrossRef: ${facultyList.crossref_citations || 'N/A'})\n`;
            if (facultyList.experience) response += `• **அனுபவம்**: ${facultyList.experience}\n`;
            if (facultyList.email) response += `• **மின்னஞ்சல்**: ${facultyList.email}\n`;
            response += `• **சுயவிவரம்**: ${facultyList.profile_url}\n\n`;
            response += `டாக்டர் ${facultyList.name.replace('Dr ', '')} கொங்கு பொறியியல் கல்லூரியில் ${facultyList.department || 'துறையில்'} ${facultyList.designation} ஆக பணிபுரிகிறார். அவர் ${facultyList.specialization || 'அவரின் துறையில்'} நிபுணத்துவம் பெற்றவர்.\n`;
        }

        response += "\nமேலும் விரிவான தகவல்கள் மற்றும் சமீபத்திய புதுப்பிப்புகளுக்கு, பார்வையிடவும்: https://kongu.irins.org/";
        return response;
    }

    // Format department information
    formatDepartmentInfo(deptInfo) {
        if (!deptInfo) {
            return "துறை கிடைக்கவில்லை. கிடைக்கக்கூடிய துறைகளில் கணினி அறிவியல், தகவல் தொழில்நுட்பம், இயந்திர பொறியியல், மின்னணுவியல் மற்றும் தகவல் தொடர்பு மற்றும் பல அடங்கும்.";
        }

        let response = `**${deptInfo.department} துறை**\n\n`;
        if (deptInfo.stats) {
            response += "துறை புள்ளிவிவரங்கள்:\n";
            response += `• வெளியீடுகள்: ${deptInfo.stats.publications || 'N/A'}\n`;
            response += `• மேற்கோள்கள்: ${deptInfo.stats.citations || 'N/A'}\n`;
            response += `• CrossRef மேற்கோள்கள்: ${deptInfo.stats.crossref_citations || 'N/A'}\n`;
            response += `• H-குறியீடு: ${deptInfo.stats.h_index || 'N/A'}\n\n`;
        }
        
        response += `விரிவான ஆசிரியர் பட்டியலுக்கு, பார்வையிடவும்: ${deptInfo.url}\n`;
        response += "முழுமையான ஆசிரியர் தகவலுக்கு, பார்வையிடவும்: https://kongu.irins.org/";
        
        return response;
    }

    // Detect if query is about faculty
    isFacultyQuery(query) {
        const facultyKeywords = [
            'faculty', 'professor', 'staff', 'teacher', 'instructor',
            'department faculty', 'faculty member', 'faculty list',
            'professor list', 'staff list', 'who teaches', 'who is',
            'dr ', 'prof ', 'associate professor', 'assistant professor',
            'publications', 'research', 'citations', 'h-index',
            'tell me about dr', 'about dr', 'info about dr'
        ];

        const departmentNames = Object.keys(this.departments);
        const queryLower = query.toLowerCase();
        
        console.log('Faculty query check:', queryLower);
        
        // Check for faculty keywords
        const hasFacultyKeyword = facultyKeywords.some(keyword => 
            queryLower.includes(keyword.toLowerCase())
        );

        // Check for department names with faculty context
        const hasDepartmentContext = departmentNames.some(dept => 
            queryLower.includes(dept.toLowerCase())
        ) && (queryLower.includes('faculty') || queryLower.includes('professor') || queryLower.includes('staff'));

        // Check if query contains faculty names from our database
        const containsFacultyName = this.topFaculty.some(faculty => {
            const nameParts = faculty.name.toLowerCase().split(' ');
            return nameParts.some(part => part.length > 2 && queryLower.includes(part));
        });

        const isFaculty = hasFacultyKeyword || hasDepartmentContext || containsFacultyName;
        console.log('Is faculty query:', isFaculty, '(keyword:', hasFacultyKeyword, ', dept:', hasDepartmentContext, ', name:', containsFacultyName, ')');
        
        return isFaculty;
    }

    // Process faculty query and return formatted response
    processFacultyQuery(query) {
        console.log('Processing faculty query:', query);
        const queryLower = query.toLowerCase();

        // Check for specific faculty name search
        const facultyResults = this.searchFaculty(query);
        if (facultyResults.length > 0) {
            console.log('Found faculty members:', facultyResults.length);
            return this.formatFacultyInfo(facultyResults, "கிடைத்த ஆசிரியர் உறுப்பினர்கள்:");
        }

        // Check for department-specific query
        for (const [deptName, deptCode] of Object.entries(this.departments)) {
            if (queryLower.includes(deptName.toLowerCase()) || 
                queryLower.includes(deptName.toLowerCase().replace(/department of /g, ''))) {
                console.log('Found department query for:', deptName);
                const deptInfo = this.getFacultyByDepartment(deptName);
                return this.formatDepartmentInfo(deptInfo);
            }
        }

        // Check for general faculty statistics
        if (queryLower.includes('how many faculty') || queryLower.includes('total faculty') || 
            queryLower.includes('faculty count') || queryLower.includes('number of faculty')) {
            console.log('Faculty statistics query');
            const stats = this.getFacultyStats();
            return `KEC இல் **முத்தம் ${stats.total} ஆசிரியர் உறுப்பினர்கள்** உள்ளனர்:\n\n` +
                   `• ${stats.professors} பேராசிரியர்கள்\n` +
                   `• ${stats.associate_professors} இணைப் பேராசிரியர்கள்\n` +
                   `• ${stats.assistant_professors} உதவிப் பேராசிரியர்கள்\n` +
                   `• ${stats.assistant_professor_senior_scale} உதவிப் பேராசிரியர்கள் (சினியர் தரம்)\n` +
                   `• ${stats.assistant_professor_senior_grade} உதவிப் பேராசிரியர்கள் (சினியர் வரிசை)\n` +
                   `• ${stats.assistant_professor_selection_grade} உதவிப் பேராசிரியர்கள் (தெரிவு வரிசை)\n` +
                   `• ${stats.assistant_professor_grade_1} உதவிப் பேராசிரியர் (வரிசை-I)\n` +
                   `• ${stats.librarian} நூலகர்\n\n` +
                   "விரிவான ஆசிரியர் தகவலுக்கு, பார்வையிடவும்: https://kongu.irins.org/";
        }

        // Check for top faculty request
        if (queryLower.includes('top faculty') || queryLower.includes('best faculty') || 
            queryLower.includes('leading faculty') || queryLower.includes('renowned faculty')) {
            console.log('Top faculty query');
            return this.formatFacultyInfo(this.getTopFaculty(), "வெளியீடுகள் மற்றும் ஆராய்ச்சி தாக்கத்தின் அடிப்படையில் எங்கள் முன்னணி ஆசிரியர் உறுப்பினர்கள்:");
        }

        // Default faculty response
        console.log('Default faculty response');
        return "நான் ஆசிரியர் தகவல்களைக் கண்டுபிடிக்க உங்களுக்கு உதவ முடியும்! நீங்கள் கேட்கலாம்:\n\n" +
               "• பெயரின் மூலம் குறிப்பிட்ட ஆசிரியர் உறுப்பினர்கள்\n" +
               "• ஒரு குறிப்பிட்ட துறையிலுள்ள ஆசிரியர்கள்\n" +
               "• ஆசிரியர் புள்ளிவிவரங்கள் மற்றும் எண்ணிக்கை\n" +
               "• முன்னணி ஆராய்ச்சியாளர்கள் மற்றும் பேராசிரியர்கள்\n\n" +
               "முழுமையான ஆசிரியர் அட்டவணைக்கு, பார்வையிடவும்: https://kongu.irins.org/";
    }
}

// Export for use in other modules
window.FacultyService = FacultyService;