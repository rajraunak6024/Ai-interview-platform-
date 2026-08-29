const resumeParsePrompt = (resumeText) => `
You are a resume parser. Extract structured information from the resume text below.

Return ONLY valid JSON, with no markdown formatting, no code fences, no explanation — just the raw JSON object, matching exactly this shape:

{
  "skills": ["string", ...],
  "education": [
    { "institution": "string", "degree": "string", "duration": "string" }
  ],
  "projects": [
    { "title": "string", "description": "string", "techStack": ["string", ...] }
  ]
}

If a section is missing from the resume, return an empty array for it. Do not invent information that isn't in the text.

Resume text:
"""
${resumeText}
"""
`;

module.exports = { resumeParsePrompt };