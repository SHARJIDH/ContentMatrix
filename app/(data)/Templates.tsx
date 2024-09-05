export default [
    {
        name: 'Blog Title Generator',
        desc: 'An AI tool that generates blog titles based on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Provide 5 blog topic ideas in bullet points based on the given niche and outline. Present the results in a rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content Generator',
        desc: 'An AI tool that generates engaging blog content based on your topic and outline.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate blog content based on the topic and outline in a rich text editor format.',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas Generator',
        desc: 'An AI tool that generates catchy and viral-worthy blog topic ideas.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate the top 5 blog topic ideas in bullet points based on the given niche, without descriptions. Present the results in a rich text editor format.',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO Title Generator',
        desc: 'An AI tool that generates SEO-optimized, high-ranking YouTube titles based on your keywords and outline.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Provide the best SEO-optimized high-ranking 5 title ideas in bullet points based on keywords and outline. Present the results in HTML tags format.',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter YouTube description outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Description Generator',
        desc: 'An AI tool that generates engaging YouTube descriptions with emojis, based on your topic and outline.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate a YouTube description with emojis, under 4-5 lines, based on the topic and outline in a rich text editor format.',
        form: [
            {
                label: 'Enter your video topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube description outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Tags Generator',
        desc: 'An AI tool that generates relevant YouTube tags based on your title and outline.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 YouTube tags in bullet points based on the title and outline in a rich text editor format.',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter YouTube video outline (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Article Rewriter (Plagiarism-Free)',
        desc: 'Use this tool to rewrite existing articles or blog posts to bypass AI detectors and ensure they are plagiarism-free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the given article to be plagiarism-free in a rich text editor format.',
        form: [
            {
                label: 'Provide your article or blog post to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Rewrite the given text, correcting grammar mistakes and improving readability in a professional manner. Present the result in a rich text editor format.',
        form: [
            {
                label: 'Enter the text you want to improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that enhances your text by adding relevant emojis.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'Text Enhancement',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add relevant emojis to the provided text and rewrite it in a rich text editor format.',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that generates engaging Instagram posts based on provided keywords.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Social Media',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram posts based on the provided keywords. Present the results in a rich text editor format.',
        form: [
            {
                label: 'Enter keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        desc: 'An AI tool that generates effective hashtags for your Instagram posts.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'Social Media',
        slug: 'instagram-hashtag-generator',
        aiPrompt: 'Generate 15 Instagram hashtags based on the provided keywords. Present the results in a rich text editor format.',
        form: [
            {
                label: 'Enter keywords for your Instagram hashtags',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post/Reel Idea Generator',
        desc: 'An AI tool that generates new and trending Instagram post and reel ideas based on your niche.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'Social Media',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram post ideas based on the given niche and latest trends. Present the results in a rich text editor format.',
        form: [
            {
                label: 'Enter keywords or niche for your Instagram ideas',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'English Grammar Check',
        desc: 'An AI tool that corrects your English grammar by analyzing the provided text.',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'Writing Assistant',
        slug: 'english-grammar-checker',
        aiPrompt: 'Correct the grammar of the provided text and present the corrected version in a rich text editor format.',
        form: [
            {
                label: 'Enter text to correct the grammar',
                field: 'textarea',
                name: 'inputText',
                required: true
            }
        ]
    },
    {
        name: 'Code Generator',
        desc: 'An AI tool that generates programming code in any specified language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Generate code based on the user-provided description and programming language. Present the code in a rich text editor format within a code block.',
        form: [
            {
                label: 'Enter a description of the code you want, including the programming language',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            }
        ]
    },
    {
        name: 'Code Explainer',
        desc: 'An AI tool that explains programming code in detail.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Explain the provided code line by line. Present the explanation in a rich text editor format within a code block.',
        form: [
            {
                label: 'Enter the code you want to understand',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            }
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your code, detects bugs, and offers detailed solutions and alternatives.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'Coding',
        slug: 'code-bug-detector',
        aiPrompt: 'Analyze the provided code to find bugs and provide solutions. Present the results in a rich text editor format within a code block.',
        form: [
            {
                label: 'Enter the code you want to test for bugs',
                field: 'textarea',
                name: 'codeInput',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline? Let our AI assist you in creating a standout tagline for your brand.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketing',
        slug: 'tagline-generator',
        aiPrompt: 'Generate 5-10 catchy taglines for the business product based on the provided product name and outline. Present the results in a rich text editor format.',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Describe what you are selling/marketing',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'An AI-powered SEO tool that creates captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketing',
        slug: 'product-description',
        aiPrompt: 'Generate a concise product description for e-commerce based on the provided product name and details. Present the result in a rich text editor format.',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    }
];
