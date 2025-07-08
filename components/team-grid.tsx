import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from "react"

export default function TeamGrid() {
  type TeamMember = typeof teamMembers[number];
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showTitleDef, setShowTitleDef] = useState<string | null>(null);

  const teamMembers = [
    {
      name: "Prof. Anand Bhalerao",
      role: "Chairman",
      department: "",
      image: "/anand-bhalerao.jpg",
      bio: "Visionary academic leader and current Vice Chancellor of Central University of Rajasthan, dedicated to solution-driven research, knowledge dissemination, and building a value-rich, community-embedded university.",
      expertise: ["Strategy", "Leadership", "Tech Startups"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Dr. Akhil Agrawal",
      role: "Director",
      department: "Life Sciences",
      image: "/img21.jpg",
      bio: "Associate Professor and Head of Microbiology at CURAJ, Ph.D. (TERI University), postdoc (University of Calgary). Expert in crop and agricultural microbiology, IPR, innovation, and startup ecosystems.",
      expertise: ["Microbiology", "IPR", "Innovation", "Startup Ecosystems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "akhilagrawal@curaj.ac.in",
      },
    },
    {
      name: "Dr. Hemlata Manglani",
      role: "Director",
      department: "Economics",
      image: "/img22.jpg",
      bio: "Associate Professor and Head, Department of Economics, known for inspiring leadership, commitment to student success, and advancing economic research for societal impact.",
      expertise: ["Economics", "Leadership", "Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "hemamanglani@curaj.ac.in",
      },
    },
    {
      name: "Prof. Praveen Sahu",
      role: "Director",
      department: "Commerce",
      image: "/praveen-sahu.jpg",
      bio: "Associate Professor and Head, Department of Commerce, known for expertise in commerce, innovation, and startup ecosystems.",
      expertise: ["Commerce", "Innovation", "Startup Ecosystems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "praveen@curaj.ac.in",
      },
    },
    {
      name: "Dr. Deepesh Bhati",
      role: "Director",
      department: "Statistics",
      image: "/Deepesh-Bhati.gif",
      bio: "Associate Professor and Head, Department of Statistics, known for expertise in statistics, innovation, and startup ecosystems.",
      expertise: ["Statistics", "Innovation", "Startup Ecosystems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "deepesh.bhati@curaj.ac.in",
      },
    },
    {
      name: "Dr. Shailendra Pratap Singh",
      role: "Director",
      department: "Health Sciences",
      image: "/shailendra-pratap-singh.png",
      bio: "Associate Professor Department of Sports Bio-Science and Health Sciences known for expertise in health sciences, innovation, and startup ecosystems.",
      expertise: ["Sports Biochemistry", "Health Sciences", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "spsingh@curaj.ac.in",
      },
    },
    {
      name: "Dr. Sanjay Kumar Garg",
      role: "Member",
      department: "Management",
      image: "/sanjay-garg.gif",
      bio: "Associate Professor and Head, Department of Management, known for expertise in management, innovation, and startup ecosystems.",
      expertise: ["Management", "Innovation", "Startup Ecosystems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sanjaygarg@curaj.ac.in",
      },
    },
    {
      name: "Dr. Shailesh Kumar Patidar",
      role: "Member",
      department: "Environmental Science",
      image: "/shailesh-patidar.png",
      bio: "Associate Professor, Department of Environmental Science, known for expertise in environmental science, innovation, and startup ecosystems.",
      expertise: ["Environmental Science", "Innovation", "Startup Ecosystems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "shailesh.patidar@curaj.ac.in",
      },
    },
    {
      name: "Dr. Jaya Kritika Ojha",
      role: "Member",
      department: "Society - Technology Interface",
      image: "/jaya-ojha.png",
      bio: "Assistant Professor, Department of Society - Technology Interface. Ph.D. (IIT Roorkee), MA (Sapienza University of Rome, Italy), M.Sc. (GB Pant University of Agriculture and Technology, Pantnagar), FDPM-IIM Ahmedabad.",
      expertise: ["Society-Technology Interface", "Interdisciplinary Studies"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jaya.kritika@curaj.ac.in",
      },
    },
    {
      name: "Dr. Kashinath G. Metri",
      role: "Member",
      department: "Yoga",
      image: "/kashinath-metri.jpg",
      bio: "Assistant Professor, Department of Yoga. Bachelor of Ayurveda Medicine and Surgery (BAMS), Rajiv Gandhi University of Health Sciences, Bengaluru, Karnataka, 2009; Doctor of Medicine- MD (Yoga and Rehabilitation), S-VYASA University, Bengaluru, 2013; PhD (Yoga), S-VYASA University, Bengaluru.",
      expertise: ["Yoga", "Ayurveda", "Rehabilitation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kashinath@curaj.ac.in",
        phone: "9035257626",
      },
    },
    {
      name: "Dr. Kapil Saraswat",
      role: "Member",
      department: "Electronics and Communication Engineering",
      image: "/kapil-saraswat.jpg",
      bio: "Assistant Professor, Department of Electronics and Communication Engineering (ECE). PhD (Electrical Engineering) IIT Kanpur, M.Tech (Electronics and Communication) IIT Roorkee, B.E. (Rajasthan University).",
      expertise: ["Electronics and Communication", "Electrical Engineering"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kapils@curaj.ac.in",
      },
    },
    {
      name: "Dr. Guneet IJ Kaur",
      role: "Member",
      department: "Sports Psychology, Sports Biomechanics",
      image: "/guneet-inder-jit-kaur.jpg",
      bio: "Assistant Professor and Coordinator, Department of Sports Psychology & Department of Sports Biomechanics. Master in Psychology (Specialization in Sports Psychology), Panjab University, Chandigarh (Gold Medalist). Ph.D. Psychology (Sports Psychology), Panjab University, Chandigarh. Former Assistant Professor, Dept. of Psychology, JAIN (Deemed to be University).",
      expertise: ["Sports Psychology", "Sports Biomechanics", "Psychology"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "guneet@curaj.ac.in",
        phone: "9815292212",
      },
    },
    {
      name: "Dr. Jugal Kishor",
      role: "Member",
      department: "Society - Technology Interface",
      image: "/jugal-kishor.jpg",
      bio: "Assistant Professor, Department of Society - Technology Interface. Ph.D. in Digital Marketing, MBA in Marketing, UGC-NET (Management), UGC-JRF.",
      expertise: ["Digital Marketing", "Marketing", "Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jugal.kishor@curaj.ac.in",
      },
    },
    {
      name: "Dr. Rakesh Kumar",
      role: "Member",
      department: "Physics",
      image: "/rakesh-kumar.jpg",
      bio: "Assistant Professor, Department of Physics. Ph.D. (JNU, New Delhi), Research Associate (UNSW, Sydney), Visiting Scholar (JNU, New Delhi), Research Fellow (NTU, Singapore).",
      expertise: ["Physics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rkumar@curaj.ac.in",
      },
    },
    {
      name: "Dr. Partha Roy",
      role: "Member",
      department: "Chemistry",
      image: "/partha-roy.jpg",
      bio: "Assistant Professor, Department of Chemistry. Ph.D. (Indian Association for the Cultivation of Science, Kolkata); Post-doc. (Weizmann Institute of Science, Israel); (University of Alberta, Canada).",
      expertise: ["Chemistry"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "partharoy@curaj.ac.in",
      },
    },
    {
      name: "Dr. Ritu Singh",
      role: "Member",
      department: "Environmental Science",
      image: "/ritu-singh.jpg",
      bio: "Assistant Professor, Department of Environmental Science. M.Sc. (Environmental Science), UGC-NET-JRF, Ph.D (Environmental Science, CSIR-Indian Institute of Toxicology Research (IITR) & BBAU).",
      expertise: ["Environmental Science", "Toxicology"],
      social: {
        linkedin: "",
        twitter: "",
        email: "ritu_ens@curaj.ac.in",
      },
    },
    {
      name: "Dr. Subrat Panda",
      role: "Member",
      department: "Atmospheric Science",
      image: "/subrat-panda.jpg",
      bio: "Assistant Professor, Department of Atmospheric Science. M.Sc., Ph.D. (IIT Delhi).",
      expertise: ["Atmospheric Science"],
      social: {
        linkedin: "",
        twitter: "",
        email: "subrat.atmos@curaj.ac.in",
        phone: "9818450738",
      },
    },
  ]

  // Title definitions (example, can be expanded)
  const titleDefinitions = {
    "Chairman": "The Chairman oversees the board and provides strategic direction.",
    "Director": "A Director manages specific departments or initiatives.",
    "Member": "A Member contributes expertise to the foundation's mission.",
  }

  // Group members by role
  const chairman = teamMembers.filter(m => m.role === "Chairman");
  const directors = teamMembers.filter(m => m.role === "Director");
  const members = teamMembers.filter(m => m.role === "Member");

  return (
    <div>
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals who guide and support our entrepreneurs
          </p>
        </div>
      <Dialog open={!!selectedMember} onOpenChange={open => !open && setSelectedMember(null)}>
        {/* Chairman Section */}
        {chairman.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Chairman</h3>
            <div className={chairman.length === 1 ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"}>
              {chairman.map((member, index) => (
                <DialogTrigger asChild key={member.name + index}>
                  <div
                    role="button"
                    tabIndex={0}
                    className="w-full max-w-full sm:max-w-xl min-w-0 mx-auto text-left focus:outline-none cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setSelectedMember(member); } }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full min-h-[420px] flex flex-col">
                      <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                        <div className="text-center mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto mb-4 object-cover w-[120px] h-[120px]"
                          />
                          <Badge variant="secondary" className="mb-2">
                            {member.department}
                          </Badge>
                          <h3
                            className="text-xl font-semibold text-gray-900 mb-1 cursor-pointer hover:underline"
                            onClick={e => {
                              e.stopPropagation();
                              setShowTitleDef(member.role)
                            }}
                            title="Click to see title definition"
                          >
                            {member.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">{member.bio}</p>
                        <div className="mb-4 mt-auto">
                          <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {member.expertise?.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-center space-x-2 mt-2">
                          {member.social.linkedin && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Twitter className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
        )}
        {/* Directors Section */}
        {directors.length > 0 && (
          <div className="mb-12 mx-2 md:mx-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Directors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
              {directors.map((member, index) => (
                <DialogTrigger asChild key={member.name + index}>
                  <div
                    role="button"
                    tabIndex={0}
                    className="w-full max-w-full sm:max-w-xl min-w-0 mx-auto text-left focus:outline-none cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setSelectedMember(member); } }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full min-h-[420px] flex flex-col">
                      <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                        <div className="text-center mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto mb-4 object-cover w-[120px] h-[120px]"
                          />
                          <Badge variant="secondary" className="mb-2">
                            {member.department}
                          </Badge>
                          <h3
                            className="text-xl font-semibold text-gray-900 mb-1 cursor-pointer hover:underline"
                            onClick={e => {
                              e.stopPropagation();
                              setShowTitleDef(member.role)
                            }}
                            title="Click to see title definition"
                          >
                            {member.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">{member.bio}</p>
                        <div className="mb-4 mt-auto">
                          <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {member.expertise?.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-center space-x-2 mt-2">
                          {member.social.linkedin && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Twitter className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
        )}
        {/* Members Section */}
        {members.length > 0 && (
          <div className="mb-12 mx-2 md:mx-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
              {members.map((member, index) => (
                <DialogTrigger asChild key={member.name + index}>
                  <div
                    role="button"
                    tabIndex={0}
                    className="w-full max-w-full sm:max-w-xl min-w-0 mx-auto text-left focus:outline-none cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setSelectedMember(member); } }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full min-h-[420px] flex flex-col">
                      <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                        <div className="text-center mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto mb-4 object-cover w-[120px] h-[120px]"
                          />
                          <Badge variant="secondary" className="mb-2">
                            {member.department}
                          </Badge>
                          <h3
                            className="text-xl font-semibold text-gray-900 mb-1 cursor-pointer hover:underline"
                            onClick={e => {
                              e.stopPropagation();
                              setShowTitleDef(member.role)
                            }}
                            title="Click to see title definition"
                          >
                            {member.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">{member.bio}</p>
                        <div className="mb-4 mt-auto">
                          <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {member.expertise?.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-center space-x-2 mt-2">
                          {member.social.linkedin && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Twitter className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
        )}
        {/* Member Details Modal */}
        {selectedMember && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedMember.name}</DialogTitle>
              <DialogDescription>{selectedMember.role}</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center text-center">
              <Image
                src={selectedMember.image || "/placeholder.svg"}
                alt={selectedMember.name}
                width={140}
                height={140}
                className="rounded-full mb-4 object-cover w-[140px] h-[140px]"
              />
              <p className="text-gray-600 mb-4">{selectedMember.bio}</p>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {selectedMember.expertise?.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-center space-x-2 mt-2">
                {selectedMember.social.linkedin && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                )}
                {selectedMember.social.twitter && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
      {/* Title Definition Modal */}
      <Dialog open={!!showTitleDef} onOpenChange={open => !open && setShowTitleDef(null)}>
        {showTitleDef && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{showTitleDef}</DialogTitle>
              <DialogDescription>{(showTitleDef && titleDefinitions[showTitleDef as keyof typeof titleDefinitions]) || "No definition available."}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
