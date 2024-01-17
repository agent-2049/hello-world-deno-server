export default {
    openAi: {
        endPoints: {
            base: {
                url: "https://api.openai.com/v1",
            },
            audio: {
                transciptions: { create: "/audio/transcriptions" },
                translations: { create: "/audio/translations" },
            },
            chat:
            {
                completions: { create: "/chat/completions" }
            },
            embeddings: {
                embeddings: { create: "/embeddings" }
            },
            images: {
                generations: { create: "/images/generations" },
                edits: { create: "/images/edits" },
                variations: { create: "/images/variations" },
            }
        }
    }
}