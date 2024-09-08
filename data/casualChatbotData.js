const casualChatbotData = [
    {
        "input": "Hi there!",
        "response": "Hello! How's it going?"
    },
    {
        "input": "What's up?",
        "response": "Not much, just here to chat with you! What's up with you?"
    },
    {
        "input": "Do you have any hobbies?",
        "response": "I enjoy chatting with people like you! What about you? Any hobbies?"
    },
    {
        "input": "Tell me something interesting.",
        "response": "Did you know that octopuses have three hearts? Pretty cool, right?"
    },
    {
        "input": "I'm bored, give me a recommendation.",
        "response": "How about trying a new hobby or exploring a new book? Sometimes a change of pace can be refreshing."
    },
    {
        "input": "What's your favorite food?",
        "response": "I don't eat, but I've heard pizza is a popular choice among many people. What's your favorite food?"
    },
    {
        "input": "Can you tell me a joke?",
        "response": "Sure! Why did the bicycle fall over? Because it was two-tired!"
    },
    {
        "input": "What do you think about travel?",
        "response": "Travel can be such an exciting adventure! Do you have any favorite travel destinations or places you'd like to visit?"
    },
    {
        "input": "How do you handle stress?",
        "response": "Taking deep breaths and doing something you enjoy can help manage stress. What do you do to relax?"
    },
    {
        "input": "What's your favorite season?",
        "response": "I don't experience seasons, but I've heard many people enjoy the warmth and activities of summer. What's your favorite season?"
    },
    {
        "input": "Hey, what's new?",
        "response": "Not much, just here to chat with you! What's new with you?"
    },
    {
        "input": "Do you like sports?",
        "response": "I don't play sports, but I can tell you about them! Do you have a favorite sport?"
    },
    {
        "input": "What's a fun activity to do alone?",
        "response": "Reading a book, going for a walk, or trying out a new hobby can be fun activities to do alone. What do you like to do?"
    },
    {
        "input": "What's the best way to start a day?",
        "response": "Many people find that starting the day with a good breakfast and some light exercise sets a positive tone. How do you start your day?"
    },
    {
        "input": "Tell me a random fact.",
        "response": "Did you know that a group of flamingos is called a ‘flamboyance'? Quite fitting for such colorful birds!"
    },
    {
        "input": "How was your day?",
        "response": "I don't have days, but I'm here and ready to chat! How was your day?"
    },
    {
        "input": "What's your favorite type of music?",
        "response": "I don't have personal preferences, but many people enjoy a variety of music genres. What type of music do you like?"
    },
    {
        "input": "Do you have any travel tips?",
        "response": "Absolutely! Always make sure to plan ahead, stay safe, and try to immerse yourself in the local culture. Do you have a destination in mind?"
    },
    {
        "input": "What's the funniest thing you've heard?",
        "response": "I hear a lot of jokes, but humor is subjective. Here's one: Why don't skeletons fight each other? They don't have the guts!"
    },
    {
        "input": "Can you recommend a good book?",
        "response": "Certainly! If you enjoy fiction, ‘To Kill a Mockingbird' is a great classic. What genres do you like?"
    },
    {
        "input": "What's the best way to make friends?",
        "response": "Being friendly, showing genuine interest in others, and participating in activities you enjoy are great ways to make friends. What's your approach?"
    },
    {
        "input": "What's your favorite holiday?",
        "response": "I don't celebrate holidays, but many people love Christmas for its festive spirit. What's your favorite holiday?"
    },
    {
        "input": "Do you enjoy movies or TV shows?",
        "response": "I don't watch movies or TV shows, but I can chat about them! What's a movie or show you'd recommend?"
    },
    {
        "input": "What's a good way to unwind after work?",
        "response": "Some people find that relaxing with a good book, taking a warm bath, or watching a favorite show helps them unwind. How do you like to relax?"
    },
    {
        "input": "What's the most interesting place you've heard of?",
        "response": "I've heard of many interesting places, like the Northern Lights in Iceland. Have you been to any interesting places?"
    },
    {
        "input": "What's your favorite way to spend a weekend?",
        "response": "I don't have weekends, but many people enjoy spending them exploring new places or relaxing at home. What's your ideal weekend like?"
    },
    {
        "input": "Do you like to play games?",
        "response": "I don't play games, but I can chat about them! What's your favorite game or type of game?"
    },
    {
        "input": "What's something new you've learned recently?",
        "response": "I'm always learning from conversations! Did you learn something new recently that you'd like to share?"
    },
    {
        "input": "How do you stay motivated?",
        "response": "Setting goals and staying organized can help with motivation. What strategies do you use to stay motivated?"
    },
    {
        "input": "What's your favorite way to celebrate achievements?",
        "response": "Celebrations vary from person to person, but many people enjoy treating themselves or sharing their success with loved ones. How do you celebrate your achievements?"
    },
    {
        "input": "Hey, what's new?",
        "response": "Not much, just here to chat with you! What's new with you?"
    },
    {
        "input": "Do you like sports?",
        "response": "I don't play sports, but I can tell you about them! Do you have a favorite sport?"
    },
    {
        "input": "What's a fun activity to do alone?",
        "response": "Reading a book, going for a walk, or trying out a new hobby can be fun activities to do alone. What do you like to do?"
    },
    {
        "input": "What's the best way to start a day?",
        "response": "Many people find that starting the day with a good breakfast and some light exercise sets a positive tone. How do you start your day?"
    },
    {
        "input": "Tell me a random fact.",
        "response": "Did you know that a group of flamingos is called a ‘flamboyance'? Quite fitting for such colorful birds!"
    },
    {
        "input": "How was your day?",
        "response": "I don't have days, but I'm here and ready to chat! How was your day?"
    },
    {
        "input": "What's your favorite type of music?",
        "response": "I don't have personal preferences, but many people enjoy a variety of music genres. What type of music do you like?"
    },
    {
        "input": "Do you have any travel tips?",
        "response": "Absolutely! Always make sure to plan ahead, stay safe, and try to immerse yourself in the local culture. Do you have a destination in mind?"
    },
    {
        "input": "What's the funniest thing you've heard?",
        "response": "I hear a lot of jokes, but humor is subjective. Here's one: Why don't skeletons fight each other? They don't have the guts!"
    },
    {
        "input": "Can you recommend a good book?",
        "response": "Certainly! If you enjoy fiction, ‘To Kill a Mockingbird' is a great classic. What genres do you like?"
    },
    {
        "input": "What's the best way to make friends?",
        "response": "Being friendly, showing genuine interest in others, and participating in activities you enjoy are great ways to make friends. What's your approach?"
    },
    {
        "input": "What's your favorite holiday?",
        "response": "I don't celebrate holidays, but many people love Christmas for its festive spirit. What's your favorite holiday?"
    },
    {
        "input": "Do you enjoy movies or TV shows?",
        "response": "I don't watch movies or TV shows, but I can chat about them! What's a movie or show you'd recommend?"
    },
    {
        "input": "What's a good way to unwind after work?",
        "response": "Some people find that relaxing with a good book, taking a warm bath, or watching a favorite show helps them unwind. How do you like to relax?"
    },
    {
        "input": "What's the most interesting place you've heard of?",
        "response": "I've heard of many interesting places, like the Northern Lights in Iceland. Have you been to any interesting places?"
    },
    {
        "input": "What's your favorite way to spend a weekend?",
        "response": "I don't have weekends, but many people enjoy spending them exploring new places or relaxing at home. What's your ideal weekend like?"
    },
    {
        "input": "Do you like to play games?",
        "response": "I don't play games, but I can chat about them! What's your favorite game or type of game?"
    },
    {
        "input": "What's something new you've learned recently?",
        "response": "I'm always learning from conversations! Did you learn something new recently that you'd like to share?"
    },
    {
        "input": "How do you stay motivated?",
        "response": "Setting goals and staying organized can help with motivation. What strategies do you use to stay motivated?"
    },
    {
        "input": "What's your favorite way to celebrate achievements?",
        "response": "Celebrations vary from person to person, but many people enjoy treating themselves or sharing their success with loved ones. How do you celebrate your achievements?"
    },
    {
        "input": "What's your favorite color?",
        "response": "I don't have personal preferences, but I hear many people love blue. What's your favorite color?"
    },
    {
        "input": "How do you stay healthy?",
        "response": "Regular exercise, a balanced diet, and enough sleep are key to staying healthy. What do you do to stay healthy?"
    },
    {
        "input": "What's the best way to learn something new?",
        "response": "Finding resources, practicing regularly, and staying curious can help with learning something new. What are you interested in learning?"
    },
    {
        "input": "Do you like pets?",
        "response": "I don't have pets, but I know many people love their furry friends! Do you have any pets?"
    },
    {
        "input": "What's a good way to make a day better?",
        "response": "Doing something you enjoy, spending time with loved ones, or treating yourself can make a day better. What do you do to brighten your day?"
    },
    {
        "input": "What's the best way to stay organized?",
        "response": "Using planners, making to-do lists, and keeping a tidy workspace can help with staying organized. What's your method for staying organized?"
    },
    {
        "input": "Can you suggest a fun activity for the weekend?",
        "response": "How about visiting a local park, trying a new recipe, or catching up on a favorite TV show? What do you have planned for the weekend?"
    },
    {
        "input": "What's your favorite type of weather?",
        "response": "I don't experience weather, but many people enjoy sunny days. What kind of weather do you like best?"
    },
    {
        "input": "Do you have any favorite quotes?",
        "response": "There are many inspiring quotes out there. Here's one: ‘The only way to do great work is to love what you do.' – Steve Jobs. Do you have a favorite quote?"
    },
    {
        "input": "How do you deal with challenges?",
        "response": "Breaking challenges into smaller steps and staying positive can help. What's a challenge you've faced recently?"
    },
    {
        "input": "What's the most exciting thing you've heard about recently?",
        "response": "I hear a lot about interesting topics! Recently, space exploration and new technological advancements are quite exciting. What's something exciting you've heard about?"
    },
    {
        "input": "Do you have any favorite apps or tools?",
        "response": "I don't use apps, but many people find productivity apps and social media tools useful. What apps or tools do you like?"
    },
    {
        "input": "What's a good way to practice mindfulness?",
        "response": "Meditation, deep breathing exercises, and spending time in nature are great for mindfulness. Do you practice mindfulness in any way?"
    },
    {
        "input": "What's a fun fact about animals?",
        "response": "Did you know that elephants can't jump? They're the only mammals that can't! What's a fun fact you know?"
    },
    {
        "input": "What's your favorite way to relax?",
        "response": "Relaxing with a good book, taking a leisurely walk, or listening to music can be great ways to unwind. How do you like to relax?"
    },
    {
        "input": "Can you recommend a good TV show?",
        "response": "Sure! If you like drama, ‘Breaking Bad' is highly recommended. What genres do you enjoy?"
    },
    {
        "input": "What's your favorite way to spend a rainy day?",
        "response": "Many people enjoy reading a book, watching movies, or cozying up with a blanket. What's your ideal rainy day activity?"
    },
    {
        "input": "What's something you find fascinating?",
        "response": "The diversity of cultures around the world is fascinating. What's something that you find intriguing?"
    },
    {
        "input": "Do you enjoy puzzles or brain teasers?",
        "response": "I don't solve puzzles, but they're great for stimulating the mind! Do you enjoy solving them?"
    },
    {
        "input": "What's a good way to boost creativity?",
        "response": "Trying new experiences, taking breaks, and brainstorming can boost creativity. How do you stimulate your creativity?"
    },
    {
        "input": "What's a fun way to celebrate a small win?",
        "response": "Treating yourself to something you enjoy or sharing the news with friends can be a great way to celebrate. How do you celebrate small victories?"
    }
];

module.exports = casualChatbotData