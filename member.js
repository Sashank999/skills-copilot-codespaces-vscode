function skillsMember() {
    // Get the skills from the database or wherever they are stored
    const skills = getSkillsFromDatabase();
  
    // Filter the skills to only include the ones for members
    const memberSkills = skills.filter(skill => skill.type === 'member');
  
    // Return the filtered skills
    return memberSkills;
}
