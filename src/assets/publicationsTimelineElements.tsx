import { type TimelineItem } from "../components/Timeline";

export const publicationsTimelineElements: TimelineItem[] = [
  {
    id: 1,
    title: "USC LA Geospatial Summit",
    location: "University of Southern California",
    description:
      "Presented GIS and remote sensing research focused on spatial analysis, time-series methods, and environmental applications.",
    date: "FEB 2026",
    type: "presentation",
    color: "blue",
    img_path: "usc.png",
  },
  {
    id: 2,
    title: "CSUNposium Research Poster",
    location: "California State University, Northridge",
    description:
      "Presented applied AI research focused on smart manufacturing, computer vision, and MRF analytics.",
    date: "APR 2026",
    type: "presentation",
    color: "blue",
    img_path: "csun.svg",
  },
  {
    id: 3,
    title:
      "KEMMA: A Knowledge-Enhanced Multimodal Multi-Agent Framework for Training, Analysis, and Decision Support in Smart Manufacturing",
    location: "Journal of Manufacturing Systems",
    description:
      "A knowledge-enhanced multimodal multi-agent framework combining multimodal RAG, knowledge graphs, and vision-language models for smart manufacturing training, analysis, and decision support.",
    date: "IN PREPARATION",
    type: "publication",
    color: "blue",
    img_path: "",
  },
  {
    id: 4,
    title:
      "Preprocessing and Deep Learning Strategies for Internal Solitary Wave Detection in SWOT Observations",
    location:
      "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (J-STARS)",
    description:
      "Manuscript evaluating domain-informed preprocessing, multimodal feature engineering, YOLO, and CNN-Transformer models for detecting internal solitary waves in SWOT satellite observations.",
    date: "IN PREPARATION",
    type: "publication",
    color: "blue",
    img_path: "",
  },
];

export default publicationsTimelineElements.reverse();
