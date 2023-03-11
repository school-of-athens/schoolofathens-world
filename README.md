
# Data Model


## User
User is split into two collections, userInfo and userDetails.
userInfo is accessed to get the portrait (name & photo).
```
const userInfo = {
    id: uid,
    displayName: String,
    photoURL: String
};
```
userDetails is accessed in the profile page.
```
const userDetails = {
    id: uid,
    firstName: String,
    lastName: String,
    email: String,
    joinDate: Timestamp,
    points: Number,
    articles: [
        ...articleIds
    ],
    opinions: [
        ...opinionsIds
    ],
    votes: [
        {
            id: voteId,
            option: String
        }
    ],
    groups: [
        ...groupIds
    ],
    // to be implemented
    badges: [
        badgeName: String,
        achievedDate: Timestamp
    ],
    followers: [
        ...followerIds
    ],
    following: [
        ...followingIds
    ],
    upvotedArticles: [
        ...articleIds
    ],
    upvotedOpinions: [
        ...opinionIds
    ]
};
```

## Vote
Each vote is represented by a document with subcollections.
```
const voteInfo = {
    id: randomId,
    title: String,
    topics: [
        String
    ],
    options: [
        {
            title: String,
            votes: 0,
        }
    ],
    voteRestriction: [
        ...groupIds
    ],
    viewRestriction: [
        ...groupIds
    ]
};
```
Each subcollection contains the opinions for one option, the title of which is the title of the option.
Each opinion will have its unique id, which will also be stored in userDetails.
```
const opinions = {
    id: randomId,
    userId: uid,
    publishDate: Timestamp,
    text: String,
    upvotes: Number
}
```
##Article
```
const article = {
    id: randomId,
    author: uid,
    title: String,
    titleImgURL: String,
    upvotes: Number,
    topics: [
        String,
    ],
    content: [
        {
            type: "P",
            text: String
        },
        {
            type: "Q",
            author: String,
            source: String
        },
        {
            type: "IMG",
            src: String
        },
    ]
}
```

## Group
```
const group = {
    id: randomId,
    name: String,
    members: [
        ...memberIds
    ],
    type: "SCHOOL",
    groupVotes: groupVotes,
    // to be implemented
    joinMethod: "INVITE_CODE",
    inviteCodes: [
        ...availableInviteCode
    ],
    votes: [
        ...voteIds  // votes that has voting restrictions
    ]
};

## Color Scheme
--chakra-colors-gray-50: #F7FAFC;
    --chakra-colors-gray-100: #EDF2F7;
    --chakra-colors-gray-200: #E2E8F0;
    --chakra-colors-gray-300: #CBD5E0;
    --chakra-colors-gray-400: #A0AEC0;
    --chakra-colors-gray-500: #718096;
    --chakra-colors-gray-600: #4A5568;
    --chakra-colors-gray-700: #2D3748;
    --chakra-colors-gray-800: #1A202C;
    --chakra-colors-gray-900: #171923;
    --chakra-colors-red-50: #FFF5F5;
    --chakra-colors-red-100: #FED7D7;
    --chakra-colors-red-200: #FEB2B2;
    --chakra-colors-red-300: #FC8181;
    --chakra-colors-red-400: #F56565;
    --chakra-colors-red-500: #E53E3E;
    --chakra-colors-red-600: #C53030;
    --chakra-colors-red-700: #9B2C2C;
    --chakra-colors-red-800: #822727;
    --chakra-colors-red-900: #63171B;
    --chakra-colors-orange-50: #FFFAF0;
    --chakra-colors-orange-100: #FEEBC8;
    --chakra-colors-orange-200: #FBD38D;
    --chakra-colors-orange-300: #F6AD55;
    --chakra-colors-orange-400: #ED8936;
    --chakra-colors-orange-500: #DD6B20;
    --chakra-colors-orange-600: #C05621;
    --chakra-colors-orange-700: #9C4221;
    --chakra-colors-orange-800: #7B341E;
    --chakra-colors-orange-900: #652B19;
    --chakra-colors-yellow-50: #FFFFF0;
    --chakra-colors-yellow-100: #FEFCBF;
    --chakra-colors-yellow-200: #FAF089;
    --chakra-colors-yellow-300: #F6E05E;
    --chakra-colors-yellow-400: #ECC94B;
    --chakra-colors-yellow-500: #D69E2E;
    --chakra-colors-yellow-600: #B7791F;
    --chakra-colors-yellow-700: #975A16;
    --chakra-colors-yellow-800: #744210;
    --chakra-colors-yellow-900: #5F370E;
    --chakra-colors-green-50: #F0FFF4;
    --chakra-colors-green-100: #C6F6D5;
    --chakra-colors-green-200: #9AE6B4;
    --chakra-colors-green-300: #68D391;
    --chakra-colors-green-400: #48BB78;
    --chakra-colors-green-500: #38A169;
    --chakra-colors-green-600: #2F855A;
    --chakra-colors-green-700: #276749;
    --chakra-colors-green-800: #22543D;
    --chakra-colors-green-900: #1C4532;
    --chakra-colors-teal-50: #E6FFFA;
    --chakra-colors-teal-100: #B2F5EA;
    --chakra-colors-teal-200: #81E6D9;
    --chakra-colors-teal-300: #4FD1C5;
    --chakra-colors-teal-400: #38B2AC;
    --chakra-colors-teal-500: #319795;
    --chakra-colors-teal-600: #2C7A7B;
    --chakra-colors-teal-700: #285E61;
    --chakra-colors-teal-800: #234E52;
    --chakra-colors-teal-900: #1D4044;
    --chakra-colors-blue-50: #ebf8ff;
    --chakra-colors-blue-100: #bee3f8;
    --chakra-colors-blue-200: #90cdf4;
    --chakra-colors-blue-300: #63b3ed;
    --chakra-colors-blue-400: #4299e1;
    --chakra-colors-blue-500: #3182ce;
    --chakra-colors-blue-600: #2b6cb0;
    --chakra-colors-blue-700: #2c5282;
    --chakra-colors-blue-800: #2a4365;
    --chakra-colors-blue-900: #1A365D;
    --chakra-colors-cyan-50: #EDFDFD;
    --chakra-colors-cyan-100: #C4F1F9;
    --chakra-colors-cyan-200: #9DECF9;
    --chakra-colors-cyan-300: #76E4F7;
    --chakra-colors-cyan-400: #0BC5EA;
    --chakra-colors-cyan-500: #00B5D8;
    --chakra-colors-cyan-600: #00A3C4;
    --chakra-colors-cyan-700: #0987A0;
    --chakra-colors-cyan-800: #086F83;
    --chakra-colors-cyan-900: #065666;
    --chakra-colors-purple-50: #FAF5FF;
    --chakra-colors-purple-100: #E9D8FD;
    --chakra-colors-purple-200: #D6BCFA;
    --chakra-colors-purple-300: #B794F4;
    --chakra-colors-purple-400: #9F7AEA;
    --chakra-colors-purple-500: #805AD5;
    --chakra-colors-purple-600: #6B46C1;
    --chakra-colors-purple-700: #553C9A;
    --chakra-colors-purple-800: #44337A;
    --chakra-colors-purple-900: #322659;
    --chakra-colors-pink-50: #FFF5F7;
    --chakra-colors-pink-100: #FED7E2;
    --chakra-colors-pink-200: #FBB6CE;
    --chakra-colors-pink-300: #F687B3;
    --chakra-colors-pink-400: #ED64A6;
    --chakra-colors-pink-500: #D53F8C;
    --chakra-colors-pink-600: #B83280;
    --chakra-colors-pink-700: #97266D;
    --chakra-colors-pink-800: #702459;
    --chakra-colors-pink-900: #521B41;
    --chakra-colors-linkedin-50: #E8F4F9;
    --chakra-colors-linkedin-100: #CFEDFB;
    --chakra-colors-linkedin-200: #9BDAF3;
    --chakra-colors-linkedin-300: #68C7EC;
    --chakra-colors-linkedin-400: #34B3E4;
    --chakra-colors-linkedin-500: #00A0DC;
    --chakra-colors-linkedin-600: #008CC9;
    --chakra-colors-linkedin-700: #0077B5;
    --chakra-colors-linkedin-800: #005E93;
    --chakra-colors-linkedin-900: #004471;
    --chakra-colors-facebook-50: #E8F4F9;
    --chakra-colors-facebook-100: #D9DEE9;
    --chakra-colors-facebook-200: #B7C2DA;
    --chakra-colors-facebook-300: #6482C0;
    --chakra-colors-facebook-400: #4267B2;
    --chakra-colors-facebook-500: #385898;
    --chakra-colors-facebook-600: #314E89;
    --chakra-colors-facebook-700: #29487D;
    --chakra-colors-facebook-800: #223B67;
    --chakra-colors-facebook-900: #1E355B;
    --chakra-colors-messenger-50: #D0E6FF;
    --chakra-colors-messenger-100: #B9DAFF;
    --chakra-colors-messenger-200: #A2CDFF;
    --chakra-colors-messenger-300: #7AB8FF;
    --chakra-colors-messenger-400: #2E90FF;
    --chakra-colors-messenger-500: #0078FF;
    --chakra-colors-messenger-600: #0063D1;
    --chakra-colors-messenger-700: #0052AC;
    --chakra-colors-messenger-800: #003C7E;
    --chakra-colors-messenger-900: #002C5C;
    --chakra-colors-whatsapp-50: #dffeec;
    --chakra-colors-whatsapp-100: #b9f5d0;
    --chakra-colors-whatsapp-200: #90edb3;
    --chakra-colors-whatsapp-300: #65e495;
    --chakra-colors-whatsapp-400: #3cdd78;
    --chakra-colors-whatsapp-500: #22c35e;
    --chakra-colors-whatsapp-600: #179848;
    --chakra-colors-whatsapp-700: #0c6c33;
    --chakra-colors-whatsapp-800: #01421c;
    --chakra-colors-whatsapp-900: #001803;
    --chakra-colors-twitter-50: #E5F4FD;
    --chakra-colors-twitter-100: #C8E9FB;
    --chakra-colors-twitter-200: #A8DCFA;
    --chakra-colors-twitter-300: #83CDF7;
    --chakra-colors-twitter-400: #57BBF5;
    --chakra-colors-twitter-500: #1DA1F2;
    --chakra-colors-twitter-600: #1A94DA;
    --chakra-colors-twitter-700: #1681BF;
    --chakra-colors-twitter-800: #136B9E;
    --chakra-colors-twitter-900: #0D4D71;
    --chakra-colors-telegram-50: #E3F2F9;
    --chakra-colors-telegram-100: #C5E4F3;
    --chakra-colors-telegram-200: #A2D4EC;
    --chakra-colors-telegram-300: #7AC1E4;
    --chakra-colors-telegram-400: #47A9DA;
    --chakra-colors-telegram-500: #0088CC;
    --chakra-colors-telegram-600: #007AB8;
    --chakra-colors-telegram-700: #006BA1;
    --chakra-colors-telegram-800: #005885;
    --chakra-colors-telegram-900: #003F5E;
    --chakra-colors-dark: #171923;
    --chakra-colors-progressBarYellow-500: #FFD000;
    --chakra-colors-yellow50: #FFFDEC;
    --chakra-colors-yellow100: #FFF9CC;
    --chakra-colors-yellow200: #FFF299;
    --chakra-colors-yellow300: #FFE866;
    --chakra-colors-yellow400: #FFDF3F;
    --chakra-colors-yellow500: #FFD000;
    --chakra-colors-yellow600: #FFBE17;
    --chakra-colors-yellow700: #FFA800;
    --chakra-colors-yellow800: #F69400;
    --chakra-colors-yellow900: #EF8508;
    --chakra-colors-blue50: #E5F6FF;
    --chakra-colors-blue100: #D4EFFE;
    --chakra-colors-blue200: #A9DBFD;
    --chakra-colors-blue300: #7EC2F9;
    --chakra-colors-blue400: #5DAAF4;
    --chakra-colors-blue500: #2A84EE;
    --chakra-colors-blue600: #1E66CC;
    --chakra-colors-blue700: #154CAB;
    --chakra-colors-blue800: #0D358A;
    --chakra-colors-blue900: #082572;
    --chakra-colors-gray50: #F7FAFC;
    --chakra-colors-gray100: #EDF2F7;
    --chakra-colors-gray200: #E2E8F0;
    --chakra-colors-gray300: #CBD5E0;
    --chakra-colors-gray400: #A0AEC0;
    --chakra-colors-gray500: #718096;
    --chakra-colors-gray600: #4A5568;
    --chakra-colors-gray700: #2D3748;
    --chakra-colors-gray800: #1A202C;
    --chakra-colors-gray900: #171923;
    --chakra-colors-green50: #e7fcf3;
    --chakra-colors-green100: #cff8e8;
    --chakra-colors-green200: #9ef1d1;
    --chakra-colors-green300: #6eebb9;
    --chakra-colors-green400: #3de4a2;
    --chakra-colors-green500: #0DDD8B;
    --chakra-colors-green600: #0ab16f;
    --chakra-colors-green700: #088553;
    --chakra-colors-green800: #055838;
    --chakra-colors-green900: #032c1c;
    --chakra-colors-red50: #FFECEB;
    --chakra-colors-red100: #FFD8D5;
    --chakra-colors-red200: #FFB1AC;
    --chakra-colors-red300: #FF9892;
    --chakra-colors-red400: #FF6A66;
    --chakra-colors-red500: #FF303E;
    --chakra-colors-red600: #DB2340;
    --chakra-colors-red700: #B7183F;
    --chakra-colors-red800: #930F3C;
    --chakra-colors-red900: #7A0939;
    --chakra-colors-pink50: #FEEDF5;
    --chakra-colors-pink100: #FDDBEB;
    --chakra-colors-pink200: #FBB7D7;
    --chakra-colors-pink300: #F992C4;
    --chakra-colors-pink400: #F76EB0;
    --chakra-colors-pink500: #F54A9C;
    --chakra-colors-pink600: #DD438C;
    --chakra-colors-pink700: #AC346D;
    --chakra-colors-pink800: #7B254E;
    --chakra-colors-pink900: #49162F;
    --chakra-colors-purple50: #F6EEFF;
    --chakra-colors-purple100: #EAD9FD;
    --chakra-colors-purple200: #D3B5FC;
    --chakra-colors-purple300: #B78EF6;
    --chakra-colors-purple400: #9E70EE;
    --chakra-colors-purple500: #7843E3;
    --chakra-colors-purple600: #5C30C3;
    --chakra-colors-purple700: #4321A3;
    --chakra-colors-purple800: #2E1583;
    --chakra-colors-purple900: #1F0C6C;
    --chakra-colors-cyan50: #EBFFFD;
    --chakra-colors-cyan100: #D6FEFA;
    --chakra-colors-cyan200: #AEFDFA;
    --chakra-colors-cyan300: #85F6FB;
    --chakra-colors-cyan400: #66E6F7;
    --chakra-colors-cyan500: #35CEF2;
    --chakra-colors-cyan600: #26A3D0;
    --chakra-colors-cyan700: #1A7CAE;
    --chakra-colors-cyan800: #10598C;
    --chakra-colors-cyan900: #0A4074;
    --chakra-colors-orange500: #FA7022;
    --chakra-colors-orange700: #BE3503;
    --chakra-colors-skintone4: #EDBC89;
    --chakra-colors-skintone11: #5D4437;
```

## Team
Jinzhou Wu

Yinglun Wang