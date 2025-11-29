export interface Card {
  word: string;
  difficulty: 'easy' | 'medium' | 'hard';
  bannedWords?: string[];
  hints?: string[];
}

// export const easyCards: Card[] = [
//   { word: "Ρομπότ", difficulty: "easy", bannedWords: ["μηχανή", "αυτόματο", "τεχνητό", "ανθρωποειδές"] },
//   { word: "ChatGPT", difficulty: "easy", bannedWords: ["OpenAI", "τεχνητή", "νοημοσύνη", "συζήτηση"] },
//   { word: "Αλγόριθμος", difficulty: "easy", bannedWords: ["κώδικας", "πρόγραμμα", "υπολογιστής", "βήματα"] },
//   { word: "Δεδομένα", difficulty: "easy", bannedWords: ["πληροφορίες", "αριθμοί", "βάση", "συλλογή"] },
//   { word: "Κώδικας", difficulty: "easy", bannedWords: ["προγραμματισμός", "γλώσσα", "εντολές", "script"] },
//   { word: "Νευρωνικό Δίκτυο", difficulty: "easy", bannedWords: ["εγκέφαλος", "νευρώνες", "μάθηση", "σύνδεσμοι"] },
//   { word: "Python", difficulty: "easy", bannedWords: ["γλώσσα", "προγραμματισμός", "φίδι", "κώδικας"] },
//   { word: "Cloud", difficulty: "easy", bannedWords: ["σύννεφο", "αποθήκευση", "διαδίκτυο", "server"] },
//   { word: "GPU", difficulty: "easy", bannedWords: ["επεξεργαστής", "γραφικά", "υπολογιστής", "κάρτα"] },
//   { word: "Dataset", difficulty: "easy", bannedWords: ["δεδομένα", "συλλογή", "πληροφορίες", "training"] },
//   { word: "API", difficulty: "easy", bannedWords: ["διεπαφή", "σύνδεση", "προγραμματισμός", "επικοινωνία"] },
//   { word: "Deep Learning", difficulty: "easy", bannedWords: ["μάθηση", "νευρωνικά", "βαθιά", "AI"] },
//   { word: "Pixel", difficulty: "easy", bannedWords: ["εικόνα", "οθόνη", "στοιχείο", "ψηφίο"] },
//   { word: "Τεχνητή Νοημοσύνη", difficulty: "easy", bannedWords: ["AI", "μηχανές", "σκέψη", "έξυπνο"] },
//   { word: "Μοντέλο", difficulty: "easy", bannedWords: ["εκπαίδευση", "πρόβλεψη", "μάθηση", "σύστημα"] },
// ];

// export const mediumCards: Card[] = [
//   { word: "Prompt", difficulty: "medium" },
//   { word: "Μηχανική Μάθηση", difficulty: "medium" },
//   { word: "Transformer", difficulty: "medium" },
//   { word: "Fine-tuning", difficulty: "medium" },
//   { word: "Overfitting", difficulty: "medium" },
//   { word: "Token", difficulty: "medium" },
//   { word: "Embedding", difficulty: "medium" },
//   { word: "Backpropagation", difficulty: "medium" },
//   { word: "Gradient Descent", difficulty: "medium" },
//   { word: "Επιβλεπόμενη Μάθηση", difficulty: "medium" },
//   { word: "Clustering", difficulty: "medium" },
//   { word: "Ενισχυτική Μάθηση", difficulty: "medium" },
//   { word: "Feature Engineering", difficulty: "medium" },
//   { word: "Regularization", difficulty: "medium" },
//   { word: "Hyperparameter", difficulty: "medium" },
// ];

// export const hardCards: Card[] = [
//   { 
//     word: "Όραση Υπολογιστών", 
//     difficulty: "hard",
//     hints: ["Επιτρέπει στους υπολογιστές να 'βλέπουν' και να κατανοούν εικόνες", "Χρησιμοποιείται για αναγνώριση προσώπων και αυτόνομα οχήματα"]
//   },
//   { 
//     word: "Αισθητήρας", 
//     difficulty: "hard",
//     hints: ["Συσκευή που ανιχνεύει αλλαγές στο περιβάλλον", "Μπορεί να μετρήσει θερμοκρασία, κίνηση ή φως"]
//   },
//   { 
//     word: "Attention Mechanism", 
//     difficulty: "hard",
//     hints: ["Βοηθά το μοντέλο να επικεντρωθεί στα σημαντικά μέρη των δεδομένων", "Κλειδί για την επιτυχία των Transformers"]
//   },
//   { 
//     word: "Generative AI", 
//     difficulty: "hard",
//     hints: ["Δημιουργεί νέο περιεχόμενο από μηδενική βάση", "Μπορεί να φτιάξει εικόνες, κείμενο ή μουσική"]
//   },
//   { 
//     word: "Transfer Learning", 
//     difficulty: "hard",
//     hints: ["Χρήση γνώσης από ένα πρόβλημα σε άλλο", "Εξοικονομεί χρόνο και υπολογιστικούς πόρους"]
//   },
//   { 
//     word: "Convolutional Layer", 
//     difficulty: "hard",
//     hints: ["Ειδικό στρώμα για επεξεργασία εικόνων", "Ανιχνεύει χαρακτηριστικά όπως άκρες και σχήματα"]
//   },
//   { 
//     word: "Λανθάνων Χώρος", 
//     difficulty: "hard",
//     hints: ["Συμπιεσμένη αναπαράσταση των δεδομένων", "Χρησιμοποιείται σε autoencoders και GANs"]
//   },
//   { 
//     word: "Batch Normalization", 
//     difficulty: "hard",
//     hints: ["Τεχνική για σταθεροποίηση της εκπαίδευσης", "Κανονικοποιεί τις εισόδους κάθε στρώματος"]
//   },
//   { 
//     word: "Αυτοκωδικοποιητής", 
//     difficulty: "hard",
//     hints: ["Μαθαίνει να συμπιέζει και να αποσυμπιέζει δεδομένα", "Χρήσιμο για μείωση διαστάσεων"]
//   },
//   { 
//     word: "LSTM", 
//     difficulty: "hard",
//     hints: ["Τύπος νευρωνικού δικτύου για ακολουθίες", "Θυμάται πληροφορίες για μεγάλο χρονικό διάστημα"]
//   },
//   { 
//     word: "Εξόρυξη Δεδομένων", 
//     difficulty: "hard",
//     hints: ["Ανακάλυψη μοτίβων σε μεγάλα σύνολα δεδομένων", "Χρησιμοποιείται για προβλέψεις και ανάλυση"]
//   },
//   { 
//     word: "Dropout", 
//     difficulty: "hard",
//     hints: ["Τεχνική για αποφυγή υπερπροσαρμογής", "Απενεργοποιεί τυχαία νευρώνες κατά την εκπαίδευση"]
//   },
//   { 
//     word: "Precision-Recall", 
//     difficulty: "hard",
//     hints: ["Μετρικές αξιολόγησης μοντέλων ταξινόμησης", "Ισορροπία μεταξύ ακρίβειας και πληρότητας"]
//   },
//   { 
//     word: "Επεξεργασία Φυσικής Γλώσσας", 
//     difficulty: "hard",
//     hints: ["Βοηθά υπολογιστές να κατανοούν ανθρώπινη γλώσσα", "Χρησιμοποιείται σε chatbots και μεταφράσεις"]
//   },
//   { 
//     word: "GAN", 
//     difficulty: "hard",
//     hints: ["Δύο νευρωνικά δίκτυα που ανταγωνίζονται", "Δημιουργεί ρεαλιστικές ψεύτικες εικόνες"]
//   },
// ];

export const teamColors = [
  { name: "Cyan", value: "180 85% 55%" },
  { name: "Purple", value: "280 70% 60%" },
  { name: "Pink", value: "330 80% 65%" },
  { name: "Orange", value: "25 95% 60%" },
  { name: "Green", value: "142 76% 45%" },
  { name: "Blue", value: "210 90% 55%" },
  { name: "Red", value: "0 80% 55%" },
  { name: "Yellow", value: "45 93% 55%" },
  { name: "Lime", value: "80 70% 50%" },
  { name: "Teal", value: "170 75% 45%" },
  { name: "Indigo", value: "240 75% 60%" },
  { name: "Rose", value: "350 85% 60%" },
  { name: "Amber", value: "35 90% 55%" },
  { name: "Emerald", value: "155 80% 45%" },
  { name: "Sky", value: "195 85% 55%" },
  { name: "Violet", value: "260 75% 60%" },
  { name: "Fuchsia", value: "300 80% 60%" },
  { name: "Coral", value: "15 85% 60%" },
  { name: "Mint", value: "160 70% 50%" },
  { name: "Lavender", value: "270 65% 65%" },
];

export const teamAvatars = [
  "🤖", "🧠", "💻", "🔮", "⚡", "🎯", "🚀", "🎮", "🎲", "🎪",
  "🎨", "🎭", "🎸", "🎺", "🎹", "🎬", "📡", "🔬", "🔭", "⚙️"
];



export const easyCards: Card[] = [
  // --- General Concepts ---
  { word: "Ρομπότ", difficulty: "easy", bannedWords: ["μηχανή", "μέταλλο", "μέλλον", "ανθρωποειδές"] },
  { word: "Τεχνητή Νοημοσύνη", difficulty: "easy", bannedWords: ["υπολογιστής", "έξυπνο", "μέλλον", "ρομπότ"] },
  { word: "Εγκέφαλος", difficulty: "easy", bannedWords: ["μυαλό", "σκέψη", "κεφάλι", "νευρώνες"] },
  { word: "Υπολογιστής", difficulty: "easy", bannedWords: ["μηχάνημα", "οθόνη", "πληκτρολόγιο", "laptop"] },
  { word: "Δεδομένα", difficulty: "easy", bannedWords: ["πληροφορίες", "αρχεία", "νούμερα", "internet"] },
  { word: "Internet", difficulty: "easy", bannedWords: ["δίκτυο", "wifi", "σύνδεση", "ιστός"] },
  { word: "Μέλλον", difficulty: "easy", bannedWords: ["αύριο", "χρόνος", "εξέλιξη", "προφητεία"] },
  { word: "Επιστήμονας", difficulty: "easy", bannedWords: ["εργαστήριο", "έρευνα", "μυαλό", "άνθρωπος"] },
  { word: "Κώδικας", difficulty: "easy", bannedWords: ["προγραμματισμός", "γλώσσα", "γραμμές", "υπολογιστής"] },
  { word: "Αλγόριθμος", difficulty: "easy", bannedWords: ["λύση", "πρόβλημα", "βήματα", "μαθηματικά"] },
  { word: "Μάθηση", difficulty: "easy", bannedWords: ["σχολείο", "γνώση", "εκπαίδευση", "διαβάζω"] },
  // { word: "Λάθος", difficulty: "easy", bannedWords: ["σφάλμα", "bug", "πρόβλημα", "σωστό"] },
  { word: "Ταχύτητα", difficulty: "easy", bannedWords: ["γρήγορα", "αργά", "επεξεργαστής", "χρόνος"] },
  { word: "Μνήμη", difficulty: "easy", bannedWords: ["ξεχνώ", "θυμάμαι", "ram", "χώρος"] },
  { word: "Γλώσσα", difficulty: "easy", bannedWords: ["ομιλία", "λέξεις", "αγγλικά", "μετάφραση"] },
  { word: "Εικόνα", difficulty: "easy", bannedWords: ["φωτογραφία", "βλέπω", "pixel", "κάμερα"] },
  { word: "Φωνή", difficulty: "easy", bannedWords: ["μικρόφωνο", "μιλάω", "ήχος", "ακούω"] },
  { word: "Αναγνώριση", difficulty: "easy", bannedWords: ["βλέπω", "καταλαβαίνω", "πρόσωπο", "ταυτότητα"] },
  { word: "Πρόβλεψη", difficulty: "easy", bannedWords: ["μέλλον", "καιρός", "μαντεία", "τι θα γίνει"] },
  { word: "Αυτοματισμός", difficulty: "easy", bannedWords: ["μόνο του", "εργοστάσιο", "δουλειά", "μηχανή"] },
  { word: "Έξυπνο", difficulty: "easy", bannedWords: ["χαζό", "μυαλό", "κινητό", "σπίτι"] },
  { word: "Εικονικό", difficulty: "easy", bannedWords: ["πραγματικό", "ψηφιακό", "VR", "κόσμος"] },
  { word: "Ψηφιακό", difficulty: "easy", bannedWords: ["αναλογικό", "υπολογιστής", "νούμερα", "οθόνη"] },
  { word: "Δίκτυο", difficulty: "easy", bannedWords: ["σύνδεση", "ιστός", "internet", "κόμβοι"] },
  { word: "Πληροφορία", difficulty: "easy", bannedWords: ["γνώση", "δεδομένα", "νέα", "μαθαίνω"] },
  { word: "Ερώτηση", difficulty: "easy", bannedWords: ["απάντηση", "ρωτάω", "chat", "απορία"] },
  { word: "Απάντηση", difficulty: "easy", bannedWords: ["λύση", "ερώτηση", "σωστό", "chat"] },
  { word: "Συζήτηση", difficulty: "easy", bannedWords: ["μιλάω", "chat", "λόγια", "διάλογος"] },
  { word: "Βοηθός", difficulty: "easy", bannedWords: ["Siri", "Alexa", "υπηρέτης", "δουλειά"] },
  { word: "Εργαλείο", difficulty: "easy", bannedWords: ["χρήση", "σφυρί", "πρόγραμμα", "βοήθεια"] },
  
  // --- Companies & Products ---
  { word: "ChatGPT", difficulty: "easy", bannedWords: ["OpenAI", "bot", "γράφει", "ερωτήσεις"] },
  { word: "Google", difficulty: "easy", bannedWords: ["αναζήτηση", "ψάχνω", "εταιρεία", "chrome"] },
  { word: "Tesla", difficulty: "easy", bannedWords: ["Musk", "αμάξι", "ηλεκτρικό", "αυτόματο"] },
  { word: "Siri", difficulty: "easy", bannedWords: ["Apple", "iPhone", "φωνή", "μιλάω"] },
  { word: "Alexa", difficulty: "easy", bannedWords: ["Amazon", "σπίτι", "ηχείο", "εντολή"] },
  { word: "YouTube", difficulty: "easy", bannedWords: ["βίντεο", "αλγόριθμος", "προτάσεις", "κανάλι"] },
  // { word: "Facebook", difficulty: "easy", bannedWords: ["social", "φίλοι", "Meta", "feed"] },
  // { word: "Instagram", difficulty: "easy", bannedWords: ["φωτογραφίες", "φίλτρα", "stories", "social"] },
  // { word: "TikTok", difficulty: "easy", bannedWords: ["βίντεο", "scroll", "εθισμός", "Κίνα"] },
  // { word: "Netflix", difficulty: "easy", bannedWords: ["ταινίες", "σειρές", "προτάσεις", "τηλεόραση"] },
  // { word: "iPhone", difficulty: "easy", bannedWords: ["Apple", "κινητό", "smart", "face id"] },
  { word: "Android", difficulty: "easy", bannedWords: ["Google", "λογισμικό", "Samsung", "κινητό"] },
  { word: "Microsoft", difficulty: "easy", bannedWords: ["Windows", "Bill Gates", "υπολογιστής", "Office"] },
  { word: "Apple", difficulty: "easy", bannedWords: ["Steve Jobs", "Mac", "μήλο", "ακριβό"] },
  { word: "Amazon", difficulty: "easy", bannedWords: ["ψώνια", "πακέτο", "internet", "Bezos"] },
  { word: "NVIDIA", difficulty: "easy", bannedWords: ["κάρτες", "παιχνίδια", "γραφικά", "τσιπ"] },
  { word: "Elon Musk", difficulty: "easy", bannedWords: ["Tesla", "SpaceX", "πλούσιος", "Twitter"] },
  { word: "Mark Zuckerberg", difficulty: "easy", bannedWords: ["Facebook", "Meta", "social", "internet"] },
  { word: "Bill Gates", difficulty: "easy", bannedWords: ["Microsoft", "Windows", "λεφτά", "γυαλιά"] },
  { word: "Samsung", difficulty: "easy", bannedWords: ["κινητό", "Korea", "Galaxy", "Android"] },

  // --- Hardware & Tech ---
  { word: "Κάμερα", difficulty: "easy", bannedWords: ["μάτια", "βλέπω", "φωτογραφία", "φακός"] },
  { word: "Μικρόφωνο", difficulty: "easy", bannedWords: ["φωνή", "ακούω", "ήχος", "μιλάω"] },
  { word: "Οθόνη", difficulty: "easy", bannedWords: ["εικόνα", "βλέπω", "γυαλί", "tv"] },
  // { word: "Μπαταρία", difficulty: "easy", bannedWords: ["ενέργεια", "ρεύμα", "φορτίζω", "τελειώνει"] },
  { word: "Τσιπ", difficulty: "easy", bannedWords: ["πράσινο", "υπολογιστής", "εγκέφαλος", "πυρίτιο"] },
  // { word: "Καλώδιο", difficulty: "easy", bannedWords: ["σύνδεση", "ρεύμα", "μακρύ", "θύρα"] },
  { word: "Server", difficulty: "easy", bannedWords: ["κουτί", "internet", "δεδομένα", "δωμάτιο"] },
  { word: "Cloud", difficulty: "easy", bannedWords: ["σύννεφο", "αρχεία", "αποθήκευση", "internet"] },
  { word: "Wi-Fi", difficulty: "easy", bannedWords: ["ασύρματο", "internet", "σήμα", "κωδικός"] },
  // { word: "Robot Vacuum", difficulty: "easy", bannedWords: ["σκούπα", "καθαρίζω", "σπίτι", "κυκλική"] },
  { word: "Drone", difficulty: "easy", bannedWords: ["πετάει", "ελικόπτερο", "κάμερα", "χειριστήριο"] },
  // { word: "Smartwatch", difficulty: "easy", bannedWords: ["ρολόι", "χέρι", "βήματα", "υγεία"] },
  // { word: "GPS", difficulty: "easy", bannedWords: ["χάρτης", "δρόμος", "δορυφόρος", "πλοήγηση"] },
  // { word: "Κινητό", difficulty: "easy", bannedWords: ["τηλέφωνο", "smart", "τσέπη", "συσκευή"] },
  // { word: "Tablet", difficulty: "easy", bannedWords: ["οθόνη", "iPad", "αφή", "μεγάλο"] },
  { word: "Laptop", difficulty: "easy", bannedWords: ["φορητό", "υπολογιστής", "τσάντα", "δουλειά"] },
  { word: "PC", difficulty: "easy", bannedWords: ["υπολογιστής", "πύργος", "γραφείο", "windows"] },
  // { word: "USB", difficulty: "easy", bannedWords: ["στικάκι", "μεταφορά", "θύρα", "αρχεία"] },
  // { word: "Πληκτρολόγιο", difficulty: "easy", bannedWords: ["γράμματα", "κουμπιά", "γράφω", "typing"] },
  // { word: "Ποντίκι", difficulty: "easy", bannedWords: ["κλικ", "δείκτης", "χέρι", "οθόνη"] },

  // --- Applications & Concepts ---
  { word: "Μετάφραση", difficulty: "easy", bannedWords: ["γλώσσα", "αγγλικά", "Google", "καταλαβαίνω"] },
  { word: "Face ID", difficulty: "easy", bannedWords: ["πρόσωπο", "ξεκλείδωμα", "iPhone", "ασφάλεια"] },
  { word: "Search", difficulty: "easy", bannedWords: ["ψάχνω", "Google", "μπάρα", "ευρετήριο"] },
  { word: "Email", difficulty: "easy", bannedWords: ["μήνυμα", "ταχυδρομείο", "@", "στέλνω"] },
  { word: "Spam", difficulty: "easy", bannedWords: ["σκουπίδια", "διαφήμιση", "ενοχλητικό", "email"] },
  { word: "Chatbot", difficulty: "easy", bannedWords: ["ρομπότ", "μιλάω", "εξυπηρέτηση", "παράθυρο"] },
  // { word: "Like", difficulty: "easy", bannedWords: ["καρδούλα", "αρέσει", "social", "αντίχειρας"] },
  // { word: "Follow", difficulty: "easy", bannedWords: ["ακολουθώ", "social", "προφίλ", "βλέπω"] },
  // { word: "Viral", difficulty: "easy", bannedWords: ["διάσημο", "παντού", "internet", "κοινοποίηση"] },
  // { word: "Influencer", difficulty: "easy", bannedWords: ["διάσημος", "Instagram", "διαφήμιση", "followers"] },
  { word: "Hacker", difficulty: "easy", bannedWords: ["κλέβει", "κωδικός", "μαύρο", "επίθεση"] },
  { word: "Ιός", difficulty: "easy", bannedWords: ["αρρώστια", "κολλάω", "υπολογιστής", "αρχεία"] },
  { word: "Password", difficulty: "easy", bannedWords: ["κωδικός", "μυστικό", "είσοδος", "ασφάλεια"] },
  // { word: "Login", difficulty: "easy", bannedWords: ["είσοδος", "όνομα", "προφίλ", "site"] },
  { word: "Game", difficulty: "easy", bannedWords: ["παιχνίδι", "παίζω", "νίκη", "κονσόλα"] },
  // { word: "Gamer", difficulty: "easy", bannedWords: ["παίκτης", "χειριστήριο", "εθισμός", "υπολογιστής"] },
  { word: "Bug", difficulty: "easy", bannedWords: ["έντομο", "λάθος", "πρόγραμμα", "κολλάει"] },
  { word: "Update", difficulty: "easy", bannedWords: ["αναβάθμιση", "νέο", "κατεβάζω", "βελτίωση"] },
  { word: "Download", difficulty: "easy", bannedWords: ["κατεβάζω", "αρχείο", "internet", "αποθήκευση"] },
  // { word: "Click", difficulty: "easy", bannedWords: ["ποντίκι", "πατάω", "σύνδεσμος", "ήχος"] },
  // { word: "Link", difficulty: "easy", bannedWords: ["σύνδεσμος", "μπλε", "πατάω", "σελίδα"] },
  { word: "App", difficulty: "easy", bannedWords: ["εφαρμογή", "κινητό", "εικονίδιο", "store"] },
  { word: "Φίλτρο", difficulty: "easy", bannedWords: ["εικόνα", "ομορφαίνω", "Instagram", "πρόσωπο"] },
  { word: "Photoshop", difficulty: "easy", bannedWords: ["εικόνα", "αλλαγή", "μοντάζ", "Adobe"] },
  // { word: "Excel", difficulty: "easy", bannedWords: ["πίνακας", "κελιά", "υπολογισμός", "Office"] },
  // { word: "Word", difficulty: "easy", bannedWords: ["γράφω", "κείμενο", "έγγραφο", "Office"] },
  { word: "Smart Home", difficulty: "easy", bannedWords: ["σπίτι", "έξυπνο", "φώτα", "αυτόματο"] },
  { word: "Αυτόματο Πιλότο", difficulty: "easy", bannedWords: ["Tesla", "αεροπλάνο", "οδηγώ", "μόνο του"] },
  { word: "Deepfake", difficulty: "easy", bannedWords: ["ψεύτικο", "βίντεο", "πρόσωπο", "αλλαγή"] },
  { word: "Fake News", difficulty: "easy", bannedWords: ["ψέματα", "ειδήσεις", "Facebook", "πιστεύω"] },

  // --- Sci-Fi & Abstract ---
  { word: "Terminator", difficulty: "easy", bannedWords: ["ταινία", "ρομπότ", "Schwarzenegger", "σκοτώνω"] },
  { word: "Matrix", difficulty: "easy", bannedWords: ["ταινία", "πράσινο", "κόσμος", "Keanu"] },
  { word: "Cyborg", difficulty: "easy", bannedWords: ["μισός", "άνθρωπος", "ρομπότ", "μηχανή"] },
  // { word: "Εξωγήινος", difficulty: "easy", bannedWords: ["διάστημα", "UFO", "πράσινος", "Άρης"] },
  // { word: "Διάστημα", difficulty: "easy", bannedWords: ["αστέρια", "φεγγάρι", "πύραυλος", "κενό"] },
  // { word: "NASA", difficulty: "easy", bannedWords: ["Αμερική", "διάστημα", "αστροναύτης", "φεγγάρι"] },
  // { word: "Star Wars", difficulty: "easy", bannedWords: ["ταινία", "Jedi", "φωτόσπαθο", "διάστημα"] },
  { word: "WALL-E", difficulty: "easy", bannedWords: ["ταινία", "ρομπότ", "σκουπίδια", "αγάπη"] },
  // { word: "Iron Man", difficulty: "easy", bannedWords: ["Marvel", "στολή", "Tony Stark", "ρομπότ"] },
  { word: "Black Mirror", difficulty: "easy", bannedWords: ["σειρά", "Netflix", "τεχνολογία", "τρόμος"] },
  { word: "Επιστήμη", difficulty: "easy", bannedWords: ["σχολείο", "έρευνα", "πείραμα", "γνώση"] },
  { word: "Μαθηματικά", difficulty: "easy", bannedWords: ["αριθμοί", "πράξεις", "σχολείο", "+"] },
  // { word: "Φυσική", difficulty: "easy", bannedWords: ["νόμοι", "βαρύτητα", "σχολείο", "επιστήμη"] },
  // { word: "Χημεία", difficulty: "easy", bannedWords: ["αντίδραση", "εργαστήριο", "μείγμα", "επιστήμη"] },
  // { word: "Βιολογία", difficulty: "easy", bannedWords: ["ζωή", "DNA", "σώμα", "επιστήμη"] },
  // { word: "Ιατρική", difficulty: "easy", bannedWords: ["γιατρός", "νοσοκομείο", "φάρμακα", "υγεία"] },
  // { word: "DNA", difficulty: "easy", bannedWords: ["γονίδια", "σώμα", "κώδικας", "ταυτότητα"] },
  { word: "Κλώνος", difficulty: "easy", bannedWords: ["ίδιος", "αντίγραφο", "πρόβατο", "DNA"] },
  // { word: "Τηλεμεταφορά", difficulty: "easy", bannedWords: ["ταξίδι", "στιγμιαία", "εξαφανίζομαι", "Sci-Fi"] },
  // { word: "Χρονομηχανή", difficulty: "easy", bannedWords: ["ταξίδι", "παρελθόν", "μέλλον", "ταινία"] },

  // --- Actions & Feelings (AI Context) ---
  { word: "Σκέψη", difficulty: "easy", bannedWords: ["μυαλό", "ιδέα", "λογική", "άνθρωπος"] },
  { word: "Λογική", difficulty: "easy", bannedWords: ["σκέψη", "σωστό", "μαθηματικά", "συναίσθημα"] },
  { word: "Συναίσθημα", difficulty: "easy", bannedWords: ["καρδιά", "αγάπη", "λύπη", "ρομπότ"] },
  // { word: "Φόβος", difficulty: "easy", bannedWords: ["τρομάζω", "κίνδυνος", "AI", "τέλος"] },
  // { word: "Βοήθεια", difficulty: "easy", bannedWords: ["ανάγκη", "σώζω", "χρήσιμο", "support"] },
  // { word: "Δημιουργία", difficulty: "easy", bannedWords: ["φτιάχνω", "νέο", "τέχνη", "κατασκευή"] },
  { word: "Τέχνη", difficulty: "easy", bannedWords: ["ζωγραφική", "μουσική", "πίνακας", "καλλιτέχνης"] },
  { word: "Μουσική", difficulty: "easy", bannedWords: ["τραγούδι", "νότες", "Spotify", "ακούω"] },
  // { word: "Ζωγραφική", difficulty: "easy", bannedWords: ["χρώματα", "πινέλο", "εικόνα", "τέχνη"] },
  // { word: "Συγγραφέας", difficulty: "easy", bannedWords: ["βιβλίο", "γράφω", "ιστορία", "AI"] },
  // { word: "Δάσκαλος", difficulty: "easy", bannedWords: ["σχολείο", "μαθαίνω", "τάξη", "παιδιά"] },
  // { word: "Μαθητής", difficulty: "easy", bannedWords: ["σχολείο", "διαβάζω", "θρανίο", "παιδί"] },
  // { word: "Εξετάσεις", difficulty: "easy", bannedWords: ["τεστ", "βαθμός", "άγχος", "ερώτηση"] },
  // { word: "Βαθμός", difficulty: "easy", bannedWords: ["άριστα", "σχολείο", "αξιολόγηση", "νούμερο"] },
  // { word: "Νίκη", difficulty: "easy", bannedWords: ["κερδίζω", "πρώτος", "παιχνίδι", "ήττα"] },
  // { word: "Ήττα", difficulty: "easy", bannedWords: ["χάνω", "παιχνίδι", "νίκη", "τέλος"] },
  // { word: "Level", difficulty: "easy", bannedWords: ["επίπεδο", "παιχνίδι", "δύσκολο", "πίστα"] },
  // { word: "Score", difficulty: "easy", bannedWords: ["πόντοι", "βαθμολογία", "παιχνίδι", "ρεκόρ"] },
  // { word: "Record", difficulty: "easy", bannedWords: ["καλύτερο", "πρώτος", "ιστορία", "σπάω"] },
  { word: "Online", difficulty: "easy", bannedWords: ["συνδεδεμένος", "internet", "offline", "τώρα"] },
  { word: "Offline", difficulty: "easy", bannedWords: ["κλειστό", "χωρίς", "internet", "online"] },
  // { word: "Loading", difficulty: "easy", bannedWords: ["φορτώνει", "περιμένω", "μπάρα", "αργεί"] },
  // { word: "Delete", difficulty: "easy", bannedWords: ["σβήνω", "κάδος", "αρχείο", "αντίο"] },
  // { word: "Save", difficulty: "easy", bannedWords: ["κρατάω", "αποθήκευση", "μην χαθεί", "δισκέτα"] },
  // { word: "Copy", difficulty: "easy", bannedWords: ["αντιγραφή", "ίδιο", "paste", "κλέβω"] },
  // { word: "Paste", difficulty: "easy", bannedWords: ["επικόλληση", "βάζω", "copy", "κείμενο"] },
  // { word: "Zoom", difficulty: "easy", bannedWords: ["κοντά", "μεγέθυνση", "κάμερα", "τηλεδιάσκεψη"] },
  // { word: "Mute", difficulty: "easy", bannedWords: ["αθόρυβο", "σιωπή", "μικρόφωνο", "ήχος"] },
  // { word: "Block", difficulty: "easy", bannedWords: ["απαγορεύω", "stop", "social", "επαφή"] },
  { word: "Report", difficulty: "easy", bannedWords: ["καταγγελία", "αναφορά", "κακό", "ban"] },
  { word: "Ban", difficulty: "easy", bannedWords: ["διώχνω", "αποκλεισμός", "παιχνίδι", "για πάντα"] },
  { word: "Admin", difficulty: "easy", bannedWords: ["αρχηγός", "διαχειριστής", "έλεγχος", "group"] },
  { word: "User", difficulty: "easy", bannedWords: ["χρήστης", "πελάτης", "εγώ", "προφίλ"] },
  { word: "Guest", difficulty: "easy", bannedWords: ["επισκέπτης", "ξένος", "κωδικός", "προσωρινός"] },
  { word: "Profile", difficulty: "easy", bannedWords: ["εικόνα", "στοιχεία", "λογαριασμός", "bio"] },
  { word: "Avatar", difficulty: "easy", bannedWords: ["χαρακτήρας", "παιχνίδι", "εικόνα", "εγώ"] },
  // { word: "Emoji", difficulty: "easy", bannedWords: ["φατσούλα", "κίτρινο", "συναίσθημα", "chat"] },
  // { word: "Meme", difficulty: "easy", bannedWords: ["αστείο", "εικόνα", "internet", "γέλιο"] },
  // { word: "GIF", difficulty: "easy", bannedWords: ["εικόνα", "κινείται", "μικρό", "βίντεο"] },
  // { word: "Sticker", difficulty: "easy", bannedWords: ["αυτοκόλλητο", "chat", "εικόνα", "viber"] },
  // { word: "Story", difficulty: "easy", bannedWords: ["ιστορία", "Instagram", "24 ώρες", "κύκλος"] },
  // { word: "Hashtag", difficulty: "easy", bannedWords: ["#", "διέση", "θέμα", "λέξη"] },
  // { word: "Tag", difficulty: "easy", bannedWords: ["ετικέτα", "όνομα", "φωτογραφία", "δείχνω"] },
  // { word: "Selfie", difficulty: "easy", bannedWords: ["φωτογραφία", "μόνος", "κάμερα", "πρόσωπο"] },
  // { word: "Vlog", difficulty: "easy", bannedWords: ["βίντεο", "YouTube", "ζωή", "κάμερα"] },
  // { word: "Stream", difficulty: "easy", bannedWords: ["live", "βίντεο", "Twitch", "παίζω"] },
  // { word: "Review", difficulty: "easy", bannedWords: ["κριτική", "αστέρια", "γνώμη", "προϊόν"] },
  // { word: "Star", difficulty: "easy", bannedWords: ["αστέρι", "βαθμός", "ουρανός", "review"] },
  // { word: "Heart", difficulty: "easy", bannedWords: ["καρδιά", "like", "αγάπη", "κόκκινο"] },
  // { word: "Trend", difficulty: "easy", bannedWords: ["μόδα", "τώρα", "δημοφιλές", "top"] },
  // { word: "News", difficulty: "easy", bannedWords: ["ειδήσεις", "νέα", "ενημέρωση", "κόσμος"] },
  // { word: "Weather", difficulty: "easy", bannedWords: ["καιρός", "βροχή", "ήλιος", "πρόβλεψη"] },
  // { word: "Map", difficulty: "easy", bannedWords: ["χάρτης", "Google", "δρόμοι", "που είμαι"] },
  // { word: "Taxi", difficulty: "easy", bannedWords: ["αμάξι", "Uber", "πληρώνω", "κίτρινο"] },
  // { word: "Shopping", difficulty: "easy", bannedWords: ["ψώνια", "ρούχα", "internet", "λεφτά"] },
  // { word: "Money", difficulty: "easy", bannedWords: ["λεφτά", "ευρώ", "Bitcoin", "πληρωμή"] },
  // { word: "Bank", difficulty: "easy", bannedWords: ["τράπεζα", "λεφτά", "κάρτα", "λογαριασμός"] },
  // { word: "Card", difficulty: "easy", bannedWords: ["κάρτα", "πλαστικό", "πληρωμή", "πιστωτική"] },
  // { word: "Wallet", difficulty: "easy", bannedWords: ["πορτοφόλι", "λεφτά", "ψηφιακό", "Google Pay"] },
  { word: "QR Code", difficulty: "easy", bannedWords: ["τετράγωνο", "σκανάρω", "κάμερα", "μαύρο"] },
  // { word: "Barcode", difficulty: "easy", bannedWords: ["γραμμές", "προϊόν", "supermarket", "τιμή"] },
  { word: "Bluetooth", difficulty: "easy", bannedWords: ["μπλε", "σύνδεση", "κοντά", "ακουστικά"] },
  { word: "NFC", difficulty: "easy", bannedWords: ["επαφή", "πληρωμή", "κινητό", "κοντά"] },
  { word: "5G", difficulty: "easy", bannedWords: ["γρήγορο", "σήμα", "internet", "κεραία"] },
  { word: "Router", difficulty: "easy", bannedWords: ["internet", "κουτί", "σύνδεση", "λαμπάκια"] },
  { word: "Modem", difficulty: "easy", bannedWords: ["internet", "τηλέφωνο", "παλιό", "ήχος"] },
  // { word: "Touch", difficulty: "easy", bannedWords: ["αφή", "οθόνη", "δάχτυλο", "πατάω"] },
  // { word: "Button", difficulty: "easy", bannedWords: ["κουμπί", "πατάω", "κλικ", "εντολή"] },
  // { word: "Power", difficulty: "easy", bannedWords: ["δύναμη", "ρεύμα", "κουμπί", "ανοίγω"] },
  // { word: "Reset", difficulty: "easy", bannedWords: ["ξανά", "αρχή", "μηδέν", "επανεκκίνηση"] },
  { word: "Crash", difficulty: "easy", bannedWords: ["κόλλησε", "χάλασε", "έκλεισε", "οθόνη"] },
  { word: "Hack", difficulty: "easy", bannedWords: ["παραβίαση", "κόλπο", "κώδικας", "παράνομο"] },
  // { word: "Safe", difficulty: "easy", bannedWords: ["ασφαλές", "κίνδυνος", "προστασία", "ok"] },
  // { word: "Smart", difficulty: "easy", bannedWords: ["έξυπνο", "χαζό", "τεχνολογία", "brain"] },
  // { word: "Fast", difficulty: "easy", bannedWords: ["γρήγορο", "ταχύτητα", "αργό", "τρέχω"] },
  // { word: "Slow", difficulty: "easy", bannedWords: ["αργό", "κολλάει", "καθυστέρηση", "γρήγορο"] },
  // { word: "Free", difficulty: "easy", bannedWords: ["δωρεάν", "πληρώνω", "λεφτά", "τζάμπα"] },
  // { word: "Pro", difficulty: "easy", bannedWords: ["καλός", "επαγγελματίας", "πληρωμή", "noob"] },
  // { word: "Noob", difficulty: "easy", bannedWords: ["άσχετος", "νέος", "χάνει", "pro"] },
  // { word: "Win", difficulty: "easy", bannedWords: ["νίκη", "κερδίζω", "κύπελλο", "τέλος"] },
  // { word: "Fail", difficulty: "easy", bannedWords: ["αποτυχία", "λάθος", "κρίμα", "χάνω"] },
  // { word: "Start", difficulty: "easy", bannedWords: ["αρχή", "ξεκινάω", "κουμπί", "go"] },
  // { word: "Stop", difficulty: "easy", bannedWords: ["τέλος", "σταματάω", "κόκκινο", "pause"] },
  // { word: "Pause", difficulty: "easy", bannedWords: ["διάλειμμα", "stop", "περίμενε", "κουμπί"] },
  // { word: "Play", difficulty: "easy", bannedWords: ["παίζω", "τρίγωνο", "βίντεο", "start"] },
  // { word: "Next", difficulty: "easy", bannedWords: ["επόμενο", "μετά", "συνέχεια", "τώρα"] },
  // { word: "Back", difficulty: "easy", bannedWords: ["πίσω", "προηγούμενο", "επιστροφή", "αριστερά"] },
  // { word: "Home", difficulty: "easy", bannedWords: ["σπίτι", "αρχική", "σελίδα", "κουμπί"] },
  // { word: "Menu", difficulty: "easy", bannedWords: ["επιλογές", "λίστα", "ρυθμίσεις", "τρεις γραμμές"] },
  // { word: "Icon", difficulty: "easy", bannedWords: ["εικονίδιο", "σχέδιο", "πάτημα", "οθόνη"] },
  // { word: "Text", difficulty: "easy", bannedWords: ["κείμενο", "γράφω", "γράμματα", "μήνυμα"] },
  // { word: "Font", difficulty: "easy", bannedWords: ["γραμματοσειρά", "στυλ", "μέγεθος", "γράμματα"] }
];




export const mediumCards: Card[] = [
  // --- AI Tech & Concepts ---
  { word: "Prompt", difficulty: "medium" },
  { word: "Chatbot", difficulty: "medium" },
  { word: "Machine Learning", difficulty: "medium" },
  { word: "Deep Learning", difficulty: "medium" },
  { word: "Neural Network", difficulty: "medium" },
  { word: "Big Data", difficulty: "medium" },
  { word: "Algorithm", difficulty: "medium" },
  { word: "Automation", difficulty: "medium" },
  { word: "Simulation", difficulty: "medium" },
  { word: "Virtual Reality (VR)", difficulty: "medium" },
  { word: "Augmented Reality (AR)", difficulty: "medium" },
  { word: "Mixed Reality", difficulty: "medium" },
  { word: "Metaverse", difficulty: "medium" },
  { word: "Blockchain", difficulty: "medium" },
  { word: "Crypto", difficulty: "medium" },
  { word: "Bitcoin", difficulty: "medium" },
  { word: "Ethereum", difficulty: "medium" },
  { word: "NFT", difficulty: "medium" },
  { word: "Mining", difficulty: "medium" },
  { word: "Cloud Computing", difficulty: "medium" },
  { word: "Server Farm", difficulty: "medium" },
  { word: "Data Center", difficulty: "medium" },
  { word: "Supercomputer", difficulty: "medium" },
  { word: "Quantum Computer", difficulty: "medium" },
  { word: "IoT (Internet of Things)", difficulty: "medium" },
  { word: "Smart City", difficulty: "medium" },
  // { word: "Smartwatch", difficulty: "medium" },
  // { word: "Wearable", difficulty: "medium" },
  // { word: "Biometrics", difficulty: "medium" },
  { word: "Fingerprint Scanner", difficulty: "medium" },
  { word: "Retina Scan", difficulty: "medium" },
  { word: "Voice Recognition", difficulty: "medium" },
  { word: "Speech Synthesis", difficulty: "medium" },
  { word: "Text-to-Speech", difficulty: "medium" },
  { word: "Image Recognition", difficulty: "medium" },
  { word: "Facial Recognition", difficulty: "medium" },
  { word: "Motion Capture", difficulty: "medium" },
  { word: "Hologram", difficulty: "medium" },
  { word: "3D Printing", difficulty: "medium" },
  { word: "Robotics", difficulty: "medium" },
  { word: "Drone", difficulty: "medium" },
  { word: "Autonomous Vehicle", difficulty: "medium" },
  { word: "Self-Driving Car", difficulty: "medium" },
  { word: "Exoskeleton", difficulty: "medium" },
  { word: "Nanotech", difficulty: "medium" },
  { word: "Cybersecurity", difficulty: "medium" },
  { word: "Encryption", difficulty: "medium" },
  { word: "Firewall", difficulty: "medium" },
  { word: "VPN", difficulty: "medium" },
  { word: "Malware", difficulty: "medium" },
  // { word: "Ransomware", difficulty: "medium" },
  { word: "Phishing", difficulty: "medium" },
  { word: "Botnet", difficulty: "medium" },
  // { word: "DDoS", difficulty: "medium" },
  // { word: "Dark Web", difficulty: "medium" },
  // { word: "Tor", difficulty: "medium" },
  { word: "Open Source", difficulty: "medium" },
  // { word: "Proprietary", difficulty: "medium" },
  { word: "API", difficulty: "medium" },
  // { word: "SDK", difficulty: "medium" },
  { word: "Framework", difficulty: "medium" },
  { word: "Library", difficulty: "medium" },
  { word: "Database", difficulty: "medium" },
  { word: "SQL", difficulty: "medium" },
  // { word: "NoSQL", difficulty: "medium" },
  { word: "Python", difficulty: "medium" },
  { word: "Java", difficulty: "medium" },
  { word: "C++", difficulty: "medium" },
  { word: "JavaScript", difficulty: "medium" },
  { word: "HTML/CSS", difficulty: "medium" },
  { word: "Linux", difficulty: "medium" },
  { word: "Ubuntu", difficulty: "medium" },
  { word: "Terminal", difficulty: "medium" },
  { word: "Command Line", difficulty: "medium" },
  { word: "Git", difficulty: "medium" },
  { word: "GitHub", difficulty: "medium" },
  { word: "Stack Overflow", difficulty: "medium" },
  { word: "Compiler", difficulty: "medium" },
  { word: "Interpreter", difficulty: "medium" },
  { word: "Debugging", difficulty: "medium" },
  { word: "Beta Testing", difficulty: "medium" },
  { word: "Version Control", difficulty: "medium" },
  // { word: "Agile", difficulty: "medium" },
  // { word: "Scrum", difficulty: "medium" },
  // { word: "DevOps", difficulty: "medium" },
  { word: "Full Stack", difficulty: "medium" },
  { word: "Frontend", difficulty: "medium" },
  { word: "Backend", difficulty: "medium" },
  { word: "UI (User Interface)", difficulty: "medium" },
  { word: "UX (User Experience)", difficulty: "medium" },
  { word: "Wireframe", difficulty: "medium" },
  { word: "Prototype", difficulty: "medium" },
  { word: "Pixel", difficulty: "medium" },
  // { word: "Voxel", difficulty: "medium" },
  // { word: "Resolution", difficulty: "medium" },
  // { word: "4K", difficulty: "medium" },
  // { word: "Frame Rate (FPS)", difficulty: "medium" },
  // { word: "Latency", difficulty: "medium" },
  // { word: "Ping", difficulty: "medium" },
  // { word: "Bandwidth", difficulty: "medium" },
  { word: "Lag", difficulty: "medium" },
  { word: "Glitch", difficulty: "medium" },
  { word: "Patch", difficulty: "medium" },
  // { word: "Mod", difficulty: "medium" },
  // { word: "DLC", difficulty: "medium" },
  // { word: "Microtransaction", difficulty: "medium" },
  // { word: "Loot Box", difficulty: "medium" },
  { word: "NPC", difficulty: "medium" },
  { word: "CPU", difficulty: "medium" },
  { word: "GPU", difficulty: "medium" },
  { word: "RAM", difficulty: "medium" },
  { word: "SSD", difficulty: "medium" },
  { word: "HDD", difficulty: "medium" },
  { word: "Motherboard", difficulty: "medium" },
  { word: "Transistor", difficulty: "medium" },
  // { word: "Silicon", difficulty: "medium" },
  { word: "Binary Code", difficulty: "medium" },
  // { word: "Hexadecimal", difficulty: "medium" },
  { word: "Bit", difficulty: "medium" },
  { word: "Byte", difficulty: "medium" },
  { word: "Terabyte", difficulty: "medium" },
  { word: "Petabyte", difficulty: "medium" },
  { word: "Cookie", difficulty: "medium" },
  // { word: "Cache", difficulty: "medium" },
  { word: "Browser", difficulty: "medium" },
  { word: "Search Engine", difficulty: "medium" },
  { word: "Incognito", difficulty: "medium" },
  { word: "IP Address", difficulty: "medium" },
  { word: "URL", difficulty: "medium" },
  { word: "Domain", difficulty: "medium" },
  // { word: "Hosting", difficulty: "medium" },
  // { word: "SaaS", difficulty: "medium" },
  // { word: "PaaS", difficulty: "medium" },
  // { word: "IaaS", difficulty: "medium" },
  { word: "Startup", difficulty: "medium" },
  // { word: "Unicorn", difficulty: "medium" },
  // { word: "Venture Capital", difficulty: "medium" },
  // { word: "Angel Investor", difficulty: "medium" },
  // { word: "Pitch Deck", difficulty: "medium" },
  // { word: "MVP", difficulty: "medium" },
  // { word: "Disruption", difficulty: "medium" },
  // { word: "Innovation", difficulty: "medium" },
  // { word: "Scalability", difficulty: "medium" },
  // { word: "Sustainability", difficulty: "medium" },
  { word: "Green Tech", difficulty: "medium" },
  // { word: "Renewable Energy", difficulty: "medium" },
  // { word: "Solar Panel", difficulty: "medium" },
  // { word: "Wind Turbine", difficulty: "medium" },
  // { word: "Battery Life", difficulty: "medium" },
  // { word: "Lithium", difficulty: "medium" },
  // { word: "E-Waste", difficulty: "medium" },
  { word: "Digital Nomad", difficulty: "medium" },
  { word: "Remote Work", difficulty: "medium" },
  { word: "Freelance", difficulty: "medium" },
  // { word: "Gig Economy", difficulty: "medium" },
  // { word: "Coworking", difficulty: "medium" },
  // { word: "Zoom Fatigue", difficulty: "medium" },
  // { word: "Webinar", difficulty: "medium" },
  { word: "E-Learning", difficulty: "medium" },
  // { word: "MOOC", difficulty: "medium" },
  { word: "Data Scientist", difficulty: "medium" },
  { word: "Data Analyst", difficulty: "medium" },
  { word: "Engineer", difficulty: "medium" },
  { word: "Developer", difficulty: "medium" },
  // { word: "Architect", difficulty: "medium" },
  // { word: "Product Manager", difficulty: "medium" },
  // { word: "CTO", difficulty: "medium" },
  { word: "CEO", difficulty: "medium" },
  // { word: "Founder", difficulty: "medium" },
  { word: "Biohacker", difficulty: "medium" },
  // { word: "Influencer", difficulty: "medium" },
  // { word: "Content Creator", difficulty: "medium" },
  // { word: "Streamer", difficulty: "medium" },
  // { word: "Vlogger", difficulty: "medium" },
  // { word: "Troll", difficulty: "medium" },
  // { word: "Bot", difficulty: "medium" },
  { word: "DeepMind", difficulty: "medium" },
  // { word: "Boston Dynamics", difficulty: "medium" },
  // { word: "SpaceX", difficulty: "medium" },
  // { word: "Blue Origin", difficulty: "medium" },
  { word: "Neuralink", difficulty: "medium" },
  // { word: "Waymo", difficulty: "medium" },
  // { word: "Uber", difficulty: "medium" },
  // { word: "Airbnb", difficulty: "medium" },
  // { word: "Spotify", difficulty: "medium" },
  { word: "Tinder", difficulty: "medium" }
];



export const hardCards: Card[] = [
  // --- Machine Learning Fundamentals ---
  {
    word: "Supervised Learning",
    difficulty: "hard",
    hints: ["Μάθηση όπου το μοντέλο εκπαιδεύεται με δεδομένα που έχουν 'ετικέτες' (σωστές απαντήσεις)", "Είναι σαν δάσκαλος που διορθώνει τα λάθη του μαθητή"]
  },
  {
    word: "Unsupervised Learning",
    difficulty: "hard",
    hints: ["Μάθηση όπου το μοντέλο ψάχνει μόνο του μοτίβα σε αταξινόμητα δεδομένα", "Χρησιμοποιείται για να βρούμε ομάδες πελατών (clustering)"]
  },
  {
    word: "Reinforcement Learning",
    difficulty: "hard",
    hints: ["Μάθηση μέσω δοκιμής και λάθους με σύστημα επιβράβευσης", "Έτσι έμαθε το πρόγραμμα AlphaGo να κερδίζει στο σκάκι"]
  },
  {
    word: "Overfitting",
    difficulty: "hard",
    hints: ["Όταν το μοντέλο 'παπαγαλίζει' τα δεδομένα εκπαίδευσης και αποτυγχάνει στα νέα", "Συμβαίνει όταν το μοντέλο είναι υπερβολικά πολύπλοκο για τα δεδομένα"]
  },
  {
    word: "Underfitting",
    difficulty: "hard",
    hints: ["Όταν το μοντέλο είναι πολύ απλό για να κατανοήσει τα δεδομένα", "Το αποτέλεσμα είναι κακή απόδοση παντού"]
  },
  {
    word: "Training Data",
    difficulty: "hard",
    hints: ["Το σύνολο δεδομένων που χρησιμοποιείται για να 'διδάξει' το μοντέλο", "Συνήθως είναι το 70-80% των συνολικών δεδομένων"]
  },
  {
    word: "Test Data",
    difficulty: "hard",
    hints: ["Δεδομένα που κρατάμε κρυφά για να ελέγξουμε το μοντέλο στο τέλος", "Δεν πρέπει ποτέ να χρησιμοποιηθούν κατά την εκπαίδευση"]
  },
  {
    word: "Validation Set",
    difficulty: "hard",
    hints: ["Δεδομένα για ρύθμιση του μοντέλου κατά τη διάρκεια της εκπαίδευσης", "Βοηθά να αποφύγουμε το Overfitting πριν το τελικό τεστ"]
  },
  {
    word: "Epoch",
    difficulty: "hard",
    hints: ["Μια πλήρης περάσματος όλων των δεδομένων εκπαίδευσης από το μοντέλο", "Η εκπαίδευση χρειάζεται συνήθως πολλές τέτοιες επαναλήψεις"]
  },
  {
    word: "Batch Size",
    difficulty: "hard",
    hints: ["Ο αριθμός των δειγμάτων που επεξεργάζεται το μοντέλο πριν ανανεωθεί", "Μικρότερο μέγεθος κάνει την εκπαίδευση πιο αργή αλλά συχνά πιο ακριβή"]
  },
  {
    word: "Learning Rate",
    difficulty: "hard",
    hints: ["Παράμετρος που καθορίζει πόσο γρήγορα αλλάζει το μοντέλο", "Αν είναι πολύ μεγάλο, το μοντέλο μπορεί να μην μάθει ποτέ"]
  },
  {
    word: "Loss Function",
    difficulty: "hard",
    hints: ["Μαθηματικός τύπος που μετράει πόσο λάθος έκανε το μοντέλο", "Στόχος της εκπαίδευσης είναι να μηδενίσει αυτή την τιμή"]
  },
  // {
  //   word: "Gradient Descent",
  //   difficulty: "hard",
  //   hints: ["Αλγόριθμος που βελτιστοποιεί το μοντέλο μειώνοντας το σφάλμα", "Φαντάσου το σαν να κατεβαίνεις ένα βουνό με κλειστά μάτια"]
  // },
  {
    word: "Bias (Προκατάληψη)",
    difficulty: "hard",
    hints: ["Συστηματικό σφάλμα που κάνει το μοντέλο να ευνοεί ορισμένα αποτελέσματα", "Μπορεί να οδηγήσει σε ρατσιστικές ή άδικες αποφάσεις AI"]
  },
  {
    word: "Variance",
    difficulty: "hard",
    hints: ["Πόσο αλλάζει η απόδοση του μοντέλου με διαφορετικά δεδομένα εκπαίδευσης", "Υψηλή διακύμανση συνήθως σημαίνει Overfitting"]
  },
  {
    word: "Feature",
    difficulty: "hard",
    hints: ["Ένα χαρακτηριστικό των δεδομένων που χρησιμοποιεί το AI", "Π.χ. για ένα σπίτι, τα τετραγωνικά και η περιοχή είναι features"]
  },
  {
    word: "Label",
    difficulty: "hard",
    hints: ["Η σωστή απάντηση που θέλουμε να προβλέψει το μοντέλο", "Σε φωτογραφίες γάτας, η λέξη 'γάτα' είναι το label"]
  },
  {
    word: "Classification",
    difficulty: "hard",
    hints: ["Κατηγοριοποίηση δεδομένων σε ομάδες (π.χ. Spam ή όχι)", "Η έξοδος είναι μια κατηγορία, όχι ένας αριθμός"]
  },
  {
    word: "Regression",
    difficulty: "hard",
    hints: ["Πρόβλεψη συνεχούς αριθμητικής τιμής (π.χ. τιμή σπιτιού)", "Η έξοδος είναι νούμερο, όχι κατηγορία"]
  },
  {
    word: "Clustering",
    difficulty: "hard",
    hints: ["Ομαδοποίηση δεδομένων που μοιάζουν μεταξύ τους", "Ο αλγόριθμος K-Means είναι ο πιο γνωστός για αυτό"]
  },

  // --- Deep Learning & Neural Networks ---
  {
    word: "Neural Network",
    difficulty: "hard",
    hints: ["Δίκτυο εμπνευσμένο από τον ανθρώπινο εγκέφαλο", "Αποτελείται από επίπεδα κόμβων (νευρώνες)"]
  },
  {
    word: "Deep Learning",
    difficulty: "hard",
    hints: ["Μηχανική μάθηση με πολλά επίπεδα νευρωνικών δικτύων", "Είναι η τεχνολογία πίσω από το ChatGPT και την αναγνώριση εικόνας"]
  },
  {
    word: "Neuron (Node)",
    difficulty: "hard",
    hints: ["Η βασική μονάδα επεξεργασίας σε ένα νευρωνικό δίκτυο", "Παίρνει εισόδους, κάνει πράξεις και βγάζει έξοδο"]
  },
  {
    word: "Layer",
    difficulty: "hard",
    hints: ["Ομάδα νευρώνων που επεξεργάζονται δεδομένα ταυτόχρονα", "Υπάρχουν στρώματα εισόδου, εξόδου και 'κρυφά' στρώματα"]
  },
  {
    word: "Hidden Layer",
    difficulty: "hard",
    hints: ["Στρώμα νευρώνων ανάμεσα στην είσοδο και την έξοδο", "Εκεί γίνεται η 'μαγεία' της βαθιάς μάθησης"]
  },
  {
    word: "Node Weights",
    difficulty: "hard",
    hints: ["Αριθμοί που καθορίζουν πόσο σημαντική είναι κάθε είσοδος", "Η εκπαίδευση του AI ουσιαστικά ρυθμίζει αυτούς τους αριθμούς"]
  },
  {
    word: "Activation Function",
    difficulty: "hard",
    hints: ["Μαθηματικός τύπος που αποφασίζει αν ένας νευρώνας θα ενεργοποιηθεί", "To ReLU και το Sigmoid είναι παραδείγματα"]
  },
  // {
  //   word: "Backpropagation",
  //   difficulty: "hard",
  //   hints: ["Η μέθοδος με την οποία το δίκτυο μαθαίνει από τα λάθη του", "Πηγαίνει πίσω στο δίκτυο και διορθώνει τα βάρη"]
  // },
  // {
  //   word: "Convolutional Neural Network (CNN)",
  //   difficulty: "hard",
  //   hints: ["Είδος δικτύου ιδανικό για επεξεργασία εικόνας", "Χρησιμοποιεί φίλτρα για να βρει γραμμές και σχήματα"]
  // },
  {
    word: "Recurrent Neural Network (RNN)",
    difficulty: "hard",
    hints: ["Δίκτυο που έχει 'μνήμη' και θυμάται προηγούμενα δεδομένα", "Χρήσιμο για κείμενο και χρονοσειρές"]
  },
  {
    word: "Transformers",
    difficulty: "hard",
    hints: ["Η σύγχρονη αρχιτεκτονική πίσω από όλα τα LLMs (GPT, BERT)", "Χρησιμοποιεί τον μηχανισμό 'Attention' για να κατανοεί κείμενο"]
  },
  {
    word: "Attention Mechanism",
    difficulty: "hard",
    hints: ["Επιτρέπει στο μοντέλο να εστιάζει σε σημαντικές λέξεις", "Έλυσε το πρόβλημα της μνήμης στα μεγάλα κείμενα"]
  },
  // {
  //   word: "Autoencoder",
  //   difficulty: "hard",
  //   hints: ["Δίκτυο που μαθαίνει να συμπιέζει και να αποσυμπιέζει δεδομένα", "Χρησιμοποιείται για αφαίρεση θορύβου από εικόνες"]
  // },
  // {
  //   word: "Generative Adversarial Network (GAN)",
  //   difficulty: "hard",
  //   hints: ["Δύο δίκτυα που ανταγωνίζονται: το ένα φτιάχνει πλαστά, το άλλο τα βρίσκει", "Δημιουργεί εξαιρετικά ρεαλιστικά Deepfakes"]
  // },
  {
    word: "Diffusion Model",
    difficulty: "hard",
    hints: ["Μοντέλο που δημιουργεί εικόνες αφαιρώντας σταδιακά θόρυβο", "Είναι η τεχνολογία του DALL-E και Midjourney"]
  },
  {
    word: "Fine-Tuning",
    difficulty: "hard",
    hints: ["Μικρή επιπλέον εκπαίδευση σε ένα έτοιμο μοντέλο", "Το κάνουμε για να μάθει το μοντέλο μια συγκεκριμένη εργασία"]
  },
  {
    word: "Transfer Learning",
    difficulty: "hard",
    hints: ["Χρήση γνώσης από ένα πρόβλημα για επίλυση ενός άλλου", "Δεν χρειάζεται να εκπαιδεύεις το AI από το μηδέν"]
  },
  {
    word: "Black Box",
    difficulty: "hard",
    hints: ["Σύστημα AI που δίνει απαντήσεις αλλά δεν ξέρουμε πώς", "Μεγάλο πρόβλημα για την εμπιστοσύνη στην τεχνολογία"]
  },
  {
    word: "Explainable AI (XAI)",
    difficulty: "hard",
    hints: ["AI σχεδιασμένο να εξηγεί τις αποφάσεις του στους ανθρώπους", "Απαραίτητο στην ιατρική και τη δικαιοσύνη"]
  },

  // --- NLP & Large Language Models ---
  {
    word: "LLM (Large Language Model)",
    difficulty: "hard",
    hints: ["Τεράστιο μοντέλο AI εκπαιδευμένο σε δισεκατομμύρια κείμενα", "To GPT-4 είναι το πιο γνωστό παράδειγμα"]
  },
  {
    word: "NLP (Natural Language Processing)",
    difficulty: "hard",
    hints: ["Ο κλάδος της AI που ασχολείται με την ανθρώπινη γλώσσα", "Περιλαμβάνει μετάφραση, chat και ανάλυση κειμένου"]
  },
  {
    word: "Token",
    difficulty: "hard",
    hints: ["Η βασική μονάδα κειμένου που διαβάζει το AI", "Μπορεί να είναι λέξη, κομμάτι λέξης ή γράμμα"]
  },
  {
    word: "Embedding",
    difficulty: "hard",
    hints: ["Μετατροπή λέξεων σε λίστες αριθμών (διανύσματα)", "Βοηθά το AI να καταλάβει ότι 'Βασιλιάς' - 'Άντρας' + 'Γυναίκα' = 'Βασίλισσα'"]
  },
  {
    word: "Vector Database",
    difficulty: "hard",
    hints: ["Βάση δεδομένων ειδική για αποθήκευση Embeddings", "Απαραίτητη για τη μνήμη των σύγχρονων Chatbots"]
  },
  {
    word: "Prompt Engineering",
    difficulty: "hard",
    hints: ["Η τέχνη του να γράφεις σωστές εντολές στο AI", "Μια καλή εντολή δίνει πολύ καλύτερο αποτέλεσμα"]
  },
  // {
  //   word: "Hallucination",
  //   difficulty: "hard",
  //   hints: ["Όταν το AI απαντάει με πειστικά αλλά εντελώς ψεύτικα στοιχεία", "Συχνό πρόβλημα όταν το ρωτάς κάτι που δεν ξέρει"]
  // },
  {
    word: "Context Window",
    difficulty: "hard",
    hints: ["Το μέγεθος της μνήμης του AI κατά τη διάρκεια μιας συνομιλίας", "Αν γεμίσει, το AI ξεχνάει τι είπατε στην αρχή"]
  },
  // {
  //   word: "Temperature",
  //   difficulty: "hard",
  //   hints: ["Ρύθμιση που ελέγχει πόσο τυχαία/δημιουργική είναι η απάντηση", "Χαμηλή θερμοκρασία σημαίνει λογική, υψηλή σημαίνει φαντασία"]
  // },
  {
    word: "Zero-Shot Learning",
    difficulty: "hard",
    hints: ["Η ικανότητα του AI να κάνει κάτι χωρίς να έχει δει παράδειγμα", "Π.χ. να μεταφράσει μια γλώσσα που δεν εκπαιδεύτηκε ειδικά"]
  },
  {
    word: "Few-Shot Learning",
    difficulty: "hard",
    hints: ["Όταν δίνεις στο AI 2-3 παραδείγματα και καταλαβαίνει τι θες", "Πολύ αποτελεσματικός τρόπος καθοδήγησης (Prompting)"]
  },
  {
    word: "Chain of Thought",
    difficulty: "hard",
    hints: ["Τεχνική όπου ζητάς στο AI να σκεφτεί βήμα-βήμα", "Βελτιώνει δραματικά τις επιδόσεις σε μαθηματικά προβλήματα"]
  },
  {
    word: "Sentiment Analysis",
    difficulty: "hard",
    hints: ["Ανάλυση κειμένου για να βρεθεί το συναίσθημα (Θετικό/Αρνητικό)", "Χρησιμοποιείται από εταιρείες για να βλέπουν τι λένε οι πελάτες"]
  },
  // {
  //   word: "Chatbot",
  //   difficulty: "hard",
  //   hints: ["Πρόγραμμα σχεδιασμένο να συνομιλεί με ανθρώπους", "Τα σύγχρονα chatbots βασίζονται σε LLMs"]
  // },
  {
    word: "Turing Test",
    difficulty: "hard",
    hints: ["Δοκιμή για το αν μια μηχανή σκέφτεται σαν άνθρωπος", "Αν δεν καταλαβαίνεις ότι μιλάς σε μηχανή, το τεστ πέτυχε"]
  },

  // --- Computer Vision & Perception ---
  {
    word: "Computer Vision",
    difficulty: "hard",
    hints: ["Ο τομέας της AI που επιτρέπει στους υπολογιστές να 'βλέπουν'", "Περιλαμβάνει αναγνώριση αντικειμένων και προσώπων"]
  },
  {
    word: "Object Detection",
    difficulty: "hard",
    hints: ["Εντοπισμός και ονομασία αντικειμένων μέσα σε μια εικόνα", "Το χρησιμοποιούν τα αυτόνομα οχήματα για να βλέπουν πεζούς"]
  },
  {
    word: "Image Segmentation",
    difficulty: "hard",
    hints: ["Διαχωρισμός της εικόνας σε ακριβή κομμάτια (pixel-pixel)", "Χρήσιμο για ιατρικές ακτινογραφίες και το Zoom background"]
  },
  // {
  //   word: "OCR (Optical Character Recognition)",
  //   difficulty: "hard",
  //   hints: ["Μετατροπή εικόνας κειμένου σε ψηφιακό κείμενο", "Σκανάρεις μια σελίδα και γίνεται αρχείο Word"]
  // },
  // {
  //   word: "Lidar",
  //   difficulty: "hard",
  //   hints: ["Αισθητήρας που χρησιμοποιεί λέιζερ για χαρτογράφηση χώρου", "Τα 'μάτια' των περισσότερων αυτόνομων οχημάτων"]
  // },
  // {
  //   word: "Biometrics",
  //   difficulty: "hard",
  //   hints: ["Αναγνώριση ανθρώπων από φυσικά χαρακτηριστικά", "Δακτυλικά αποτυπώματα, ίριδα ματιού, φωνή"]
  // },

  // --- Data & Infrastructure ---
  // {
  //   word: "Big Data",
  //   difficulty: "hard",
  //   hints: ["Δεδομένα τόσο μεγάλα που δεν χωράνε σε έναν υπολογιστή", "Χρειάζονται ειδικά εργαλεία για ανάλυση"]
  // },
  // {
  //   word: "Data Mining",
  //   difficulty: "hard",
  //   hints: ["Η διαδικασία εύρεσης κρυμμένων μοτίβων σε δεδομένα", "Σαν να ψάχνεις χρυσό μέσα σε βουνό πληροφορίας"]
  // },
  {
    word: "Data Cleaning",
    difficulty: "hard",
    hints: ["Η διόρθωση λαθών στα δεδομένα πριν την εκπαίδευση", "Το πιο χρονοβόρο κομμάτι της δουλειάς ενός Data Scientist"]
  },
  {
    word: "Annotator",
    difficulty: "hard",
    hints: ["Άνθρωπος που βάζει ετικέτες σε δεδομένα για να μάθει το AI", "Χωρίς αυτούς, το Supervised Learning δεν θα υπήρχε"]
  },
  // {
  //   word: "GPU (Graphics Processing Unit)",
  //   difficulty: "hard",
  //   hints: ["Κάρτα γραφικών, απαραίτητη για την εκπαίδευση AI", "Κάνει χιλιάδες παράλληλους υπολογισμούς"]
  // },
  // {
  //   word: "TPU (Tensor Processing Unit)",
  //   difficulty: "hard",
  //   hints: ["Ειδικό τσιπ της Google σχεδιασμένο μόνο για AI", "Πιο γρήγορο από GPU για συγκεκριμένες εργασίες"]
  // },
  // {
  //   word: "Cloud Computing",
  //   difficulty: "hard",
  //   hints: ["Χρήση απομακρυσμένων server για επεξεργασία δεδομένων", "To AWS και το Azure είναι οι μεγαλύτεροι πάροχοι"]
  // },
  {
    word: "Edge AI",
    difficulty: "hard",
    hints: ["Εκτέλεση AI απευθείας στη συσκευή, όχι στο Cloud", "Κάνει το AI πιο γρήγορο και ασφαλές (π.χ. στο κινητό)"]
  },
  {
    word: "Federated Learning (Συνεργατική Μάθηση)",
    difficulty: "hard",
    hints: ["Εκπαίδευση AI σε πολλά κινητά χωρίς να φύγουν τα δεδομένα", "Προστατεύει την ιδιωτικότητα των χρηστών"]
  },
  {
    word: "API (Application Programming Interface)",
    difficulty: "hard",
    hints: ["Ο τρόπος που δύο προγράμματα μιλάνε μεταξύ τους", "Έτσι συνδέεται μια εφαρμογή με το ChatGPT"]
  },

  // --- Advanced Concepts & Ethics ---
  // {
  //   word: "AGI (Artificial General Intelligence)",
  //   difficulty: "hard",
  //   hints: ["AI που έχει ανθρώπινη ευφυΐα και κάνει τα πάντα", "Ο τελικός στόχος της έρευνας, δεν υπάρχει ακόμα"]
  // },
  // {
  //   word: "Singularity",
  //   difficulty: "hard",
  //   hints: ["Το σημείο όπου η AI θα ξεπεράσει την ανθρώπινη νοημοσύνη", "Θεωρείται σημείο χωρίς επιστροφή για την ιστορία"]
  // },
  {
    word: "Alignment Problem",
    difficulty: "hard",
    hints: ["Το πρόβλημα του πώς να κάνουμε το AI να θέλει το καλό μας", "Αν του πούμε 'σώσε τον πλανήτη', μπορεί να εξαλείψει τους ανθρώπους"]
  },
  // {
  //   word: "Algorithmic Bias",
  //   difficulty: "hard",
  //   hints: ["Όταν ο αλγόριθμος κάνει διακρίσεις (π.χ. σε δάνεια)", "Συμβαίνει γιατί τα δεδομένα του παρελθόντος είχαν προκαταλήψεις"]
  // },
  // {
  //   word: "Deepfake",
  //   difficulty: "hard",
  //   hints: ["Πλαστές εικόνες/βίντεο που φτιάχνονται με AI", "Μπορούν να βάλουν το πρόσωπό σου σε ταινία"]
  // },
  {
    word: "Knowledge Graph (Γράφος Γνώσης)",
    difficulty: "hard",
    hints: ["Δίκτυο γνώσης που συνδέει έννοιες μεταξύ τους", "Βοηθά τη Google να απαντάει άμεσα σε ερωτήσεις"]
  },
  // {
  //   word: "Semantic Search",
  //   difficulty: "hard",
  //   hints: ["Αναζήτηση με βάση το νόημα, όχι απλά λέξεις-κλειδιά", "Καταλαβαίνει τι εννοείς ακόμα και αν το πεις λάθος"]
  // },
  {
    word: "Quantum Machine Learning",
    difficulty: "hard",
    hints: ["Συνδυασμός κβαντικών υπολογιστών και μηχανικής μάθησης", "Υπόσχεται απίστευτες ταχύτητες στο μέλλον"]
  },
  {
    word: "Genetic Algorithm",
    difficulty: "hard",
    hints: ["Αλγόριθμος που μιμείται την εξέλιξη των ειδών", "Δημιουργεί 'γενιές' λύσεων και κρατάει τις καλύτερες"]
  },
  {
    word: "Swarm Intelligence",
    difficulty: "hard",
    hints: ["AI εμπνευσμένο από τη συμπεριφορά μυρμηγκιών ή πουλιών", "Πολλά απλά ρομπότ συνεργάζονται για κάτι μεγάλο"]
  },

  // --- Miscellaneous AI Tech ---
  // {
  //   word: "Python",
  //   difficulty: "hard",
  //   hints: ["Η πιο δημοφιλής γλώσσα προγραμματισμού για AI", "Εύκολη στη γραφή και έχει τεράστια υποστήριξη"]
  // },
  {
    word: "TensorFlow",
    difficulty: "hard",
    hints: ["Βιβλιοθήκη AI που δημιουργήθηκε από την Google", "Ένα από τα βασικά εργαλεία για Deep Learning"]
  },
  {
    word: "PyTorch",
    difficulty: "hard",
    hints: ["Βιβλιοθήκη AI από τη Meta (Facebook)", "Πολύ δημοφιλής στους ερευνητές"]
  },
  {
    word: "Kaggle",
    difficulty: "hard",
    hints: ["Πλατφόρμα διαγωνισμών για Data Science", "Εκεί μαθαίνουν και ανταγωνίζονται οι επιστήμονες δεδομένων"]
  },
  {
    word: "GitHub Copilot",
    difficulty: "hard",
    hints: ["Εργαλείο AI που γράφει κώδικα αυτόματα", "Βοηθά τους προγραμματιστές να δουλεύουν πιο γρήγορα"]
  },
  // {
  //   word: "OpenAI",
  //   difficulty: "hard",
  //   hints: ["Η εταιρεία που δημιούργησε το ChatGPT", "Ξεκίνησε ως μη κερδοσκοπική και άλλαξε τον κόσμο"]
  // },
  // {
  //   word: "DeepMind",
  //   difficulty: "hard",
  //   hints: ["Εργαστήριο AI της Google στο Λονδίνο", "Έφτιαξε το AlphaGo και έλυσε το πρόβλημα των πρωτεϊνών"]
  // },
  // {
  //   word: "Moore's Law",
  //   difficulty: "hard",
  //   hints: ["Η παρατήρηση ότι η δύναμη των υπολογιστών διπλασιάζεται κάθε 2 χρόνια", "Ήταν σωστή για δεκαετίες αλλά τώρα φτάνει στα όρια"]
  // },
  // {
  //   word: "Digital Twin",
  //   difficulty: "hard",
  //   hints: ["Ψηφιακό αντίγραφο ενός φυσικού συστήματος", "Χρησιμοποιείται για να κάνουμε πειράματα χωρίς ρίσκο"]
  // },
  // {
  //   word: "Internet of Things (IoT)",
  //   difficulty: "hard",
  //   hints: ["Δίκτυο καθημερινών συσκευών που συνδέονται στο internet", "Ψυγεία, λάμπες και θερμοστάτες που μιλάνε μεταξύ τους"]
  // }
];