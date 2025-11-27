export interface Card {
  word: string;
  difficulty: 'easy' | 'medium' | 'hard';
  bannedWords?: string[];
  hints?: string[];
}

export const easyCards: Card[] = [
  { word: "Ρομπότ", difficulty: "easy", bannedWords: ["μηχανή", "αυτόματο", "τεχνητό", "ανθρωποειδές"] },
  { word: "ChatGPT", difficulty: "easy", bannedWords: ["OpenAI", "τεχνητή", "νοημοσύνη", "συζήτηση"] },
  { word: "Αλγόριθμος", difficulty: "easy", bannedWords: ["κώδικας", "πρόγραμμα", "υπολογιστής", "βήματα"] },
  { word: "Δεδομένα", difficulty: "easy", bannedWords: ["πληροφορίες", "αριθμοί", "βάση", "συλλογή"] },
  { word: "Κώδικας", difficulty: "easy", bannedWords: ["προγραμματισμός", "γλώσσα", "εντολές", "script"] },
  { word: "Νευρωνικό Δίκτυο", difficulty: "easy", bannedWords: ["εγκέφαλος", "νευρώνες", "μάθηση", "σύνδεσμοι"] },
  { word: "Python", difficulty: "easy", bannedWords: ["γλώσσα", "προγραμματισμός", "φίδι", "κώδικας"] },
  { word: "Cloud", difficulty: "easy", bannedWords: ["σύννεφο", "αποθήκευση", "διαδίκτυο", "server"] },
  { word: "GPU", difficulty: "easy", bannedWords: ["επεξεργαστής", "γραφικά", "υπολογιστής", "κάρτα"] },
  { word: "Dataset", difficulty: "easy", bannedWords: ["δεδομένα", "συλλογή", "πληροφορίες", "training"] },
  { word: "API", difficulty: "easy", bannedWords: ["διεπαφή", "σύνδεση", "προγραμματισμός", "επικοινωνία"] },
  { word: "Deep Learning", difficulty: "easy", bannedWords: ["μάθηση", "νευρωνικά", "βαθιά", "AI"] },
  { word: "Pixel", difficulty: "easy", bannedWords: ["εικόνα", "οθόνη", "στοιχείο", "ψηφίο"] },
  { word: "Τεχνητή Νοημοσύνη", difficulty: "easy", bannedWords: ["AI", "μηχανές", "σκέψη", "έξυπνο"] },
  { word: "Μοντέλο", difficulty: "easy", bannedWords: ["εκπαίδευση", "πρόβλεψη", "μάθηση", "σύστημα"] },
];

export const mediumCards: Card[] = [
  { word: "Prompt", difficulty: "medium" },
  { word: "Μηχανική Μάθηση", difficulty: "medium" },
  { word: "Transformer", difficulty: "medium" },
  { word: "Fine-tuning", difficulty: "medium" },
  { word: "Overfitting", difficulty: "medium" },
  { word: "Token", difficulty: "medium" },
  { word: "Embedding", difficulty: "medium" },
  { word: "Backpropagation", difficulty: "medium" },
  { word: "Gradient Descent", difficulty: "medium" },
  { word: "Επιβλεπόμενη Μάθηση", difficulty: "medium" },
  { word: "Clustering", difficulty: "medium" },
  { word: "Ενισχυτική Μάθηση", difficulty: "medium" },
  { word: "Feature Engineering", difficulty: "medium" },
  { word: "Regularization", difficulty: "medium" },
  { word: "Hyperparameter", difficulty: "medium" },
];

export const hardCards: Card[] = [
  { 
    word: "Όραση Υπολογιστών", 
    difficulty: "hard",
    hints: ["Επιτρέπει στους υπολογιστές να 'βλέπουν' και να κατανοούν εικόνες", "Χρησιμοποιείται για αναγνώριση προσώπων και αυτόνομα οχήματα"]
  },
  { 
    word: "Αισθητήρας", 
    difficulty: "hard",
    hints: ["Συσκευή που ανιχνεύει αλλαγές στο περιβάλλον", "Μπορεί να μετρήσει θερμοκρασία, κίνηση ή φως"]
  },
  { 
    word: "Attention Mechanism", 
    difficulty: "hard",
    hints: ["Βοηθά το μοντέλο να επικεντρωθεί στα σημαντικά μέρη των δεδομένων", "Κλειδί για την επιτυχία των Transformers"]
  },
  { 
    word: "Generative AI", 
    difficulty: "hard",
    hints: ["Δημιουργεί νέο περιεχόμενο από μηδενική βάση", "Μπορεί να φτιάξει εικόνες, κείμενο ή μουσική"]
  },
  { 
    word: "Transfer Learning", 
    difficulty: "hard",
    hints: ["Χρήση γνώσης από ένα πρόβλημα σε άλλο", "Εξοικονομεί χρόνο και υπολογιστικούς πόρους"]
  },
  { 
    word: "Convolutional Layer", 
    difficulty: "hard",
    hints: ["Ειδικό στρώμα για επεξεργασία εικόνων", "Ανιχνεύει χαρακτηριστικά όπως άκρες και σχήματα"]
  },
  { 
    word: "Λανθάνων Χώρος", 
    difficulty: "hard",
    hints: ["Συμπιεσμένη αναπαράσταση των δεδομένων", "Χρησιμοποιείται σε autoencoders και GANs"]
  },
  { 
    word: "Batch Normalization", 
    difficulty: "hard",
    hints: ["Τεχνική για σταθεροποίηση της εκπαίδευσης", "Κανονικοποιεί τις εισόδους κάθε στρώματος"]
  },
  { 
    word: "Αυτοκωδικοποιητής", 
    difficulty: "hard",
    hints: ["Μαθαίνει να συμπιέζει και να αποσυμπιέζει δεδομένα", "Χρήσιμο για μείωση διαστάσεων"]
  },
  { 
    word: "LSTM", 
    difficulty: "hard",
    hints: ["Τύπος νευρωνικού δικτύου για ακολουθίες", "Θυμάται πληροφορίες για μεγάλο χρονικό διάστημα"]
  },
  { 
    word: "Εξόρυξη Δεδομένων", 
    difficulty: "hard",
    hints: ["Ανακάλυψη μοτίβων σε μεγάλα σύνολα δεδομένων", "Χρησιμοποιείται για προβλέψεις και ανάλυση"]
  },
  { 
    word: "Dropout", 
    difficulty: "hard",
    hints: ["Τεχνική για αποφυγή υπερπροσαρμογής", "Απενεργοποιεί τυχαία νευρώνες κατά την εκπαίδευση"]
  },
  { 
    word: "Precision-Recall", 
    difficulty: "hard",
    hints: ["Μετρικές αξιολόγησης μοντέλων ταξινόμησης", "Ισορροπία μεταξύ ακρίβειας και πληρότητας"]
  },
  { 
    word: "Επεξεργασία Φυσικής Γλώσσας", 
    difficulty: "hard",
    hints: ["Βοηθά υπολογιστές να κατανοούν ανθρώπινη γλώσσα", "Χρησιμοποιείται σε chatbots και μεταφράσεις"]
  },
  { 
    word: "GAN", 
    difficulty: "hard",
    hints: ["Δύο νευρωνικά δίκτυα που ανταγωνίζονται", "Δημιουργεί ρεαλιστικές ψεύτικες εικόνες"]
  },
];

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
