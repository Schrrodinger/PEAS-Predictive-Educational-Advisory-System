// universityDataProcessor.js

// This function will parse the CSV data and return a structured object
export function parseUniversityData(csvData) {
  // Implement the parsing logic here
  const lines = csvData.split('\n');
  const universities = {};

  lines.forEach(line => {
    const [region, university, majorCode, minScore, maxScore] = line.split(',');

    if (!universities[region]) {
      universities[region] = {};
    }

    if (!universities[region][university]) {
      universities[region][university] = [];
    }

    universities[region][university].push({
      majorCode: parseInt(majorCode),
      minScore: parseFloat(minScore),
      maxScore: parseFloat(maxScore)
    });
  });

  return universities;
}


// This function will find matching universities based on the predicted major and chosen region
export function findMatchingUniversities(predictedMajor, chosenRegion, universitiesData) {
  const majorCodeMap = {
    "Ngôn ngữ": 0,
    "Nghệ thuật": 1,
    "Mỹ thuật ứng dụng": 2,
    "Kinh tế học": 3,
    "Báo chí và thông tin": 4,
    "Kinh doanh và quản lý": 5,
    "Pháp luật": 6,
    "Khoa học tự nhiên": 7,
    "Kỹ thuật": 8,
    "Máy tính và công nghệ thông tin": 9,
    "Kỹ thuật (Technical Engineering)": 10,
    "Sản xuất và chế biến": 11,
    "Kiến trúc và xây dựng": 12,
    "Nông nghiệp, lâm nghiệp và thủy sản": 13,
    "Thú y": 14,
    "Sức khỏe": 15,
    "Du lịch, khách sạn, thể thao và dịch vụ cá nhân": 16,
    "Dịch vụ vận tải": 17,
    "Khoa học môi trường": 18,
    "An ninh và quốc phòng": 19,
    "Khoa học giáo dục và đào tạo giáo viên": 20
  };

   const majorCode = majorCodeMap[predictedMajor];
  const regionCode = chosenRegion === "Miền Bắc" ? "3" : chosenRegion === "Miền Trung" ? "2" : "1";

  const matchingUniversities = [];

  if (universitiesData[regionCode]) {
    for (const [university, majors] of Object.entries(universitiesData[regionCode])) {
      if (majors.some(major => major.majorCode === majorCode)) {
        matchingUniversities.push(university);
      }
    }
  }

  return matchingUniversities;
}