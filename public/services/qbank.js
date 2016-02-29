angular
  .module('quizApp')
  .factory('QBank', function($http) {
      var qData = {
          "1": {
              "question":"Nine gang members were indicted for the murder of a tenth gang member who had become an informant. The gang leader pleaded guilty. At the trial of the other eight, the state's evidence showed the following: The gang leader announced a party to celebrate the recent release of a gang member from jail. But the party was not what it seemed. The gang leader had learned that the recently released gang member had earned his freedom by informing the authorities about the gang's criminal activities. The gang leader decided to use the party to let the other gang members see what happened to a snitch. He told no one about his plan. At the party, after all present had consumed large amounts of liquor, the gang leader announced that the released gang member was an informant and stabbed him with a knife in front of the others. The eight other gang members watched and did nothing while the informant slowly bled to death. The jury found the eight gang members guilty of murder and they appealed. <br><br>Should the appellate court uphold the convictions? ",
              "ans1": "No, because mere presence at the scene of a crime is insufficient to make one an accomplice. ",
              "ans2": "No, because murder is a specific intent crime, and there is insufficient evidence to show that they intended to kill. ",
              "ans3": "Yes, because the gang members made no effort to save the informant after he had been stabbed. ",
              "ans4": "Yes, because voluntary intoxication does not negate criminal responsibility. ",
              "key": "1"
          },
          "2": {
              "question":"An undercover police detective told a local drug dealer that she wanted to buy cocaine, but that she needed time to raise the necessary funds. The drug dealer said that he needed time to get the cocaine. They agreed to meet again in 10 days. An hour later, without a warrant, other officers forcibly entered the drug dealer's apartment and arrested him for attempted possession of a controlled substance.<br><br>If the drug dealer is prosecuted in a common-law jurisdiction for attempted possession of cocaine, should he be convicted?\"",
              "ans1": "No, because he had not taken sufficient acts toward commission of the crime.",
              "ans2": "No, because he was illegally arrested.",
              "ans3": "Yes, because by objective standards an agreement between them had occurred.",
              "ans4": "Yes, because his intention to obtain the cocaine was unequivocally expressed.",
              "key": "1"
          },

         "3": {
             "question": "Nine gang members were indicted for the murder of a tenth gang member who had become an informant. The gang leader pleaded guilty. At the trial of the other eight, the state's evidence showed the following: The gang leader announced a party to celebrate the recent release of a gang member from jail. But the party was not what it seemed. The gang leader had learned that the recently released gang member had earned his freedom by informing the authorities about the gang's criminal activities. The gang leader decided to use the party to let the other gang members see what happened to a snitch. He told no one about his plan. At the party, after all present had consumed large amounts of liquor, the gang leader announced that the released gang member was an informant and stabbed him with a knife in front of the others. The eight other gang members watched and did nothing while the informant slowly bled to death. The jury found the eight gang members guilty of murder and they appealed. <br><br>Should the appellate court uphold the convictions? ",
             "ans1": "No, because the troopers could reasonably rely on the computer report and the search was incident to arrest.",
             "ans2": "No, because troopers may lawfully search a driver incident to a valid traffic stop.",
             "ans3": "Yes, because there was no arrest for the traffic violation and no lawful arrest could be made on the basis of the warrant.",
             "ans4": "Yes, because there was no probable cause or reasonable suspicion to believe that the driver possessed drugs.",
             "key": "1"
         },
         "4": {

             "question": "A woman who is a computer expert decided to dedicate herself to exposing persons who trafficked in child pornography. She posted a number of sexually oriented photographs on her website. The file for each photograph contained an embedded Trojan horse program (a program that would allow the woman to enter the computer of anyone who downloaded the photograph). A man downloaded one of those photographs onto his personal computer. Using the embedded program, the woman entered the man's computer and found a file containing a pornographic photograph of a child. She copied the file and turned it over to a federal law enforcement agency. A federal agent told her that a successful prosecution would require more than one photograph and offered her a monetary reward for additional photographs leading to the man's conviction. The woman entered the man's computer again, and this time she found hundreds of child pornography photographs, which she turned over to the federal agency.<br><br>The man was charged with multiple counts of violating federal child pornography statutes. He has moved to suppress the photographs that the woman discovered on his computer. The motion is based on both the Fourth Amendment and a federal statute forbidding interception of electronic communication without permission. The parties have stipulated that the woman's conduct in downloading photographs from the man's computer violated the interception statute.<br><br>How should the court rule on the defendant's motion to suppress?",
             "ans1": "Deny the motion as to all photographs.",
             "ans2": "Grant the motion as to all photographs, because the woman acted without probable cause.",
             "ans3": "Grant the motion as to all photographs, because the woman violated the federal interception statute.",
             "ans4": "Grant the motion only as to the second set of photographs.",
             "key": "4"
         },
         "5": {
             "question": "A state statute defines murder in the first degree as knowingly causing the death of another person after deliberation upon the matter.\" Second-degree murder is defined as \"knowingly causing the death of another person.\" Manslaughter is defined as at common law. Deliberation is defined as \"cool reflection for any length of time",
             "ans1": "It will set aside the conviction, because the jury was composed of fewer than 12 members.",
             "ans2": "It will set aside the conviction, because the 6-person jury verdict was not unanimous.",
             "ans3": "It will set aside the conviction for both reasons. ",
             "ans4": "It will uphold the conviction. ",
             "key": "2"
         },
         "6": {
             "question": "Police officers received a tip that drug dealing was occurring at a certain ground-floor duplex apartment. They decided to stake out the apartment. The stakeout revealed that a significant number of people visited the apartment for short periods of time and then left. A man exited the apartment and started to walk briskly away. The officers grabbed the man and, when he struggled, wrestled him to the ground. They searched him and found a bag of heroin in one of his pockets. After discovering the heroin on the man, the police decided to enter the apartment. They knocked on the door, which was opened by the woman who lived there. The police asked if they could come inside, and the woman gave them permission to do so. Once inside, the officers observed several bags of heroin on the living room table. The woman is charged with possession of the heroin found on the living room table. She moves pretrial to suppress the heroin on the ground that it was obtained by virtue of an illegal search and seizure. <br><br>Should the woman's motion be granted? ",
             "ans1": "No, because the tip together with the heroin found in the man's pocket provided probable cause for the search. ",
             "ans2": "No, because the woman consented to the officers' entry. ",
             "ans3": "Yes, because the officers' decision to enter the house was the fruit of an illegal search of the man. ",
             "ans4": "Yes, because the officers did not inform the woman that she could refuse consent. ",
             "key": "2"
         },
         "7": {
             "question": "A husband and wife took their 12-year-old son to a political rally to hear a controversial United States senator speak. The speaker was late, and the wife stepped outside to smoke a cigarette. While there, she saw a man placing what she believed to be a bomb against a wall at the back of the building. She went back inside and told her husband what she had seen. Without alerting anyone, they took their son and left. Some 20 minutes later, the bomb exploded, killing eight persons and injuring 50. In the jurisdiction, murder in the first degree is defined as an intentional homicide committed with premeditation and deliberation; murder in the second degree is defined as all other murder at common law; and manslaughter is defined as either a homicide in the heat of passion arising from adequate provocation or a homicide caused by gross negligence or reckless indifference to consequence. <br><br>As to the deaths of the eight persons, what crime, if any, did the wife commit?",
             "ans1": "Manslaughter. ",
             "ans2": "Murder in the first degree. ",
             "ans3": "Murder in the second degree. ",
             "ans4": "No crime. ",
             "key": "4"
         },
         "8": {
             "question": "A woman decided to steal a necklace that belonged to her neighbor. She knew where the neighbor kept the necklace because she had been in the neighbor's house on many occasions when the neighbor had taken off the necklace and put it away in a jewelry box in the bathroom. One night, the woman went to the neighbor's house. The neighbor was away and the house was dark. The woman opened the bathroom window, saw the jewelry box on the counter, and started to climb inside. As her leg cleared the window sill, the neighbor's cat let out a loud screech. Terrified, the woman bolted back outside and fled. <br><br>The crimes below are listed in descending order of seriousness. What is the most serious crime committed by the woman? ",
             "ans1": "Burglary. ",
             "ans2": "Attempted burglary. ",
             "ans3": "Attempted larceny. ",
             "ans4": "No crime. ",
             "key": "1"
         },
         "9": {
             "question": "A defendant was charged with manslaughter. At the preliminary hearing, the magistrate dismissed the charge on the grounds that the evidence was insufficient. The prosecutor then brought the case before a grand jury. After hearing the evidence presented by the prosecutor, the grand jury refused to return an indictment. The prosecutor waited a few months until a new grand jury had been impaneled and brought the case before that grand jury, which returned an indictment charging the defendant with manslaughter. The defendant moves to dismiss the indictment on double jeopardy grounds. <br><br>Should the motion be granted? ",
             "ans1": "No, because jeopardy had not attached. ",
             "ans2": "No, because there has been no conviction or acquittal. ",
             "ans3": "Yes, because any proceeding after the preliminary hearing would violate double jeopardy. ",
             "ans4": "Yes, because bringing the case before the second grand jury was a violation of double jeopardy. ",
             "key": "1"
         },
         "10": {
             "question": "State troopers lawfully stopped a car driver on a turnpike for exceeding the speed limit by four miles per hour. One trooper approached the car to warn the driver to drive within the speed limit. The other trooper remained in the patrol car and ran a computer check of the car's license number. The computer check indicated that there was an outstanding warrant for the driver's arrest for unpaid traffic tickets. The troopers then arrested the driver based on the warrant, and they proceeded to search the driver. During the search, they discovered a package of heroin in one of the driver's pockets. Later, it was learned that the driver had paid the outstanding traffic tickets 10 days earlier and that the warrant had been quashed, but the clerk of the court had failed to update the computer, which continued to list the warrant as outstanding.<br><br>The driver was charged with unlawful possession of heroin. Her attorney has filed a motion to suppress the use of the heroin as evidence.<br><br>Should the motion be granted?",
             "ans1": "No, because the troopers could reasonably rely on the computer report and the search was incident to arrest.",
             "ans2": "No, because troopers may lawfully search a driver incident to a valid traffic stop.",
             "ans3": "Yes, because there was no arrest for the traffic violation and no lawful arrest could be made on the basis of the warrant.",
             "ans4": "Yes, because there was no probable cause or reasonable suspicion to believe that the driver possessed drugs.",
             "key": "1"
         },
         "11": {
             "question": "A woman who is a computer expert decided to dedicate herself to exposing persons who trafficked in child pornography. She posted a number of sexually oriented photographs on her website. The file for each photograph contained an embedded Trojan horse program (a program that would allow the woman to enter the computer of anyone who downloaded the photograph). A man downloaded one of those photographs onto his personal computer. Using the embedded program, the woman entered the man's computer and found a file containing a pornographic photograph of a child. She copied the file and turned it over to a federal law enforcement agency. A federal agent told her that a successful prosecution would require more than one photograph and offered her a monetary reward for additional photographs leading to the man's conviction. The woman entered the man's computer again, and this time she found hundreds of child pornography photographs, which she turned over to the federal agency.<br><br>The man was charged with multiple counts of violating federal child pornography statutes. He has moved to suppress the photographs that the woman discovered on his computer. The motion is based on both the Fourth Amendment and a federal statute forbidding interception of electronic communication without permission. The parties have stipulated that the woman's conduct in downloading photographs from the man's computer violated the interception statute.<br><br>How should the court rule on the defendant's motion to suppress?",
             "ans1": "Deny the motion as to all photographs.",
             "ans2": "Grant the motion as to all photographs, because the woman acted without probable cause.",
             "ans3": "Grant the motion as to all photographs, because the woman violated the federal interception statute.",
             "ans4": "Grant the motion only as to the second set of photographs.",
             "key": "4"
         },
         "12": {
             "question": "A state statute defines murder in the first degree as knowingly causing the death of another person after deliberation upon the matter.\" Second-degree murder is defined as \"knowingly causing the death of another person.\" Manslaughter is defined as at common law. Deliberation is defined as \"cool reflection for any length of time,\"",
             "ans1": " no matter how brief.\" The defendant, despondent and angry over losing his job, was contemplating suicide. He took his revolver, went to a bar, and drank until he was very intoxicated. A customer on the next stool was telling the bartender how it was necessary for companies to downsize and become more efficient in order to keep the economy strong. The defendant turned to him and said, \"Why don't you shut the hell up.\" The customer responded, \"This is a free country and I can say what I want",
             "ans2": " no matter how brief.\" The defendant, despondent and angry over losing his job, was contemplating suicide. He took his revolver, went to a bar, and drank until he was very intoxicated. A customer on the next stool was telling the bartender how it was necessary for companies to downsize and become more efficient in order to keep the economy strong. The defendant turned to him and said, \"Why don't you shut the hell up.\" The customer responded, \"This is a free country and I can say what I want",
             "ans3": " no matter how brief.\" The defendant, despondent and angry over losing his job, was contemplating suicide. He took his revolver, went to a bar, and drank until he was very intoxicated. A customer on the next stool was telling the bartender how it was necessary for companies to downsize and become more efficient in order to keep the economy strong. The defendant turned to him and said, \"Why don't you shut the hell up.\" The customer responded, \"This is a free country and I can say what I want",
             "ans4": " no matter how brief.\" The defendant, despondent and angry over losing his job, was contemplating suicide. He took his revolver, went to a bar, and drank until he was very intoxicated. A customer on the next stool was telling the bartender how it was necessary for companies to downsize and become more efficient in order to keep the economy strong. The defendant turned to him and said, \"Why don't you shut the hell up.\" The customer responded, \"This is a free country and I can say what I want",
             "key": "4"
         },
         "13": {
             "question": "In a criminal trial, the evidence showed that the defendant's neighbor tried to kill the defendant by stabbing him. The defendant ran to his room, picked up a gun, and told his neighbor to back off. The neighbor did not, but continued her attack and stabbed him in the arm. The defendant then shot the neighbor twice. The neighbor fell to the floor and lay quietly moaning. After a few seconds, the defendant fired a third shot into the neighbor. The jury found that the neighbor died instantly from the third shot and that the defendant was no longer in fear of being attacked by her. <br><br>The defendant could properly be convicted of which of the following degrees of criminal homicide, if any? ",
             "ans1": "Attempted murder only. ",
             "ans2": "Manslaughter only. ",
             "ans3": "Murder or manslaughter. ",
             "ans4": "No degree of criminal homicide. ",
             "key": "3"
         },
         "14": {
             "question": "A woman drove her car through the drive-through lane of a fast-food restaurant in the afternoon. When she reached the microphone used to place orders, she said, There's a man across the street with a rifle. He can see everything you do. If you do not do exactly what I tell you\"",
             "ans1": "he will shoot you. Put all the money from the register into a sack and give it to me when I drive up.\" The clerk did not see anyone across the street and was unsure whether anyone was there. However, unwilling to risk harm to himself, he put $500 in a paper bag and handed it to the woman when she drove up to the delivery window. The woman drove off with the money but was arrested a short time later. She had lied about the man with a rifle and had acted alone. <br><br>Of what crime or crimes can the woman be convicted? \"",
             "ans2": "\"he will shoot you. Put all the money from the register into a sack and give it to me when I drive up.\"\" The clerk did not see anyone across the street and was unsure whether anyone was there. However, unwilling to risk harm to himself, he put $500 in a paper bag and handed it to the woman when she drove up to the delivery window. The woman drove off with the money but was arrested a short time later. She had lied about the man with a rifle and had acted alone. <br><br>Of what crime or crimes can the woman be convicted? \"\"\"",
             "ans3": "\"he will shoot you. Put all the money from the register into a sack and give it to me when I drive up.\"\" The clerk did not see anyone across the street and was unsure whether anyone was there. However, unwilling to risk harm to himself, he put $500 in a paper bag and handed it to the woman when she drove up to the delivery window. The woman drove off with the money but was arrested a short time later. She had lied about the man with a rifle and had acted alone. <br><br>Of what crime or crimes can the woman be convicted? \"\"\"",
             "ans4": "\"he will shoot you. Put all the money from the register into a sack and give it to me when I drive up.\"\" The clerk did not see anyone across the street and was unsure whether anyone was there. However, unwilling to risk harm to himself, he put $500 in a paper bag and handed it to the woman when she drove up to the delivery window. The woman drove off with the money but was arrested a short time later. She had lied about the man with a rifle and had acted alone. <br><br>Of what crime or crimes can the woman be convicted? \"\"\"",
             "key": "4"
         },
         "15": {
             "question": "A customer asked to see an expensive watch in a jewelry store. In conversation with the clerk, the customer falsely claimed to be the son of the mayor. When handed the watch, he asked if he could put it on, walk around a bit so he could see how it felt on his wrist, and then briefly step outside to observe it in natural light. The clerk agreed, saying, I know I can trust someone like you with the merchandise.\"\" The customer walked out of the store wearing the watch and never returned. A week later, the clerk was at a gathering when she spotted the customer wearing the watch. She told him that he must either pay for the watch or give it back. He hissed, \"\"I'll knock your block off if you mess with me.\"\" Intimidated, the clerk backed off. <br><br>The following list of crimes is in descending order of seriousness.<br><br> What is the most serious crime the customer committed? \"\"",
             "ans1": "Robbery. ",
             "ans2": "Larceny. ",
             "ans3": "False pretenses. ",
             "ans4": "Embezzlement. ",
             "key": "2"
         },
         "16": {
             "question": "After a liquor store was robbed, the police received an anonymous telephone call naming a store employee as the perpetrator of the robbery. Honestly believing that their actions were permitted by the U.S. Constitution, the police talked one of the employee's neighbors into going to the employee's home with a hidden tape recorder to engage him in a conversation about the crime. During the conversation, the employee admitted committing the robbery. The employee was charged in state court with the robbery. He moved to suppress the recording on the grounds that the method of obtaining it violated his constitutional rights under both the state and federal constitutions. Assume that a clear precedent from the state supreme court holds that the conduct of the police in making the recording violated the employee's rights under the state constitution, and that the exclusionary rule is the proper remedy for this violation. <br><br>Should the court grant the employee's motion? \"",
             "ans1": "No, because the employee's federal constitutional rights were not violated, and this circumstance overrides any state constitutional provisions. ",
             "ans2": "No, because the police were acting in the good-faith belief that their actions were permitted by the federal Constitution. ",
             "ans3": "Yes, because the making of the recording violated the state constitution. ",
             "ans4": "Yes, because use of the recording would violate the neighbor's federal constitutional rights. ",
             "key": "3"
         },

         "17": {
                 "question":"Four men are charged with conspiracy to commit a series of bank robberies. Nine successful bank robberies took place during the period of the charged conspiracy. Because the robbers wore masks and gloves and stole the bank surveillance tapes, no direct identification of the robbers by the witnesses has been made. Some circumstantial evidence ties each of the men to the overall conspiracy. During cross-examination, a prosecution witness testified that one defendant was in jail on other charges during six of the robberies. That defendant's lawyer has moved for a judgment of acquittal at the close of the government's case. <br><br>Should the motion be granted? \"",
                 "ans1":"No, because a conspirator is not required to agree to all of the objects of the conspiracy. ",
                 "ans2":"No, because a conspirator need not be present at the commission of each crime conspired upon. ",
                 "ans3":"Yes, provided the defendant has complied with the rule requiring pretrial notice of alibi. ",
                 "ans4":"Yes, regardless of compliance with the alibi rule, because the government is bound by exculpatory evidence elicited during its case-in-chief. ",
                 "key":"2"
         },
         "18": {
                 "question":"A defendant was lawfully arrested without a warrant for bank robbery. He was not given Miranda warnings, but was immediately taken to a police station where he and five other men were placed in a lineup to be viewed by the bank teller. Each man was required to say the words spoken by the bank robber: Give me all your money. I've got a gun.\"\" After all the men in the lineup spoke those words, the teller identified the defendant as the robber.<br><br>The defendant subsequently moved to suppress the testimony of the teller, claiming the lineup violated his privilege against self-incrimination. At a suppression hearing, the teller testified that she had not gotten a good look at the robber's face, because the robber had been wearing a hat pulled down over most of his face, but that she was certain the defendant was the robber because she had recognized his voice at the lineup.<br><br>Should the defendant's motion be granted?\"\"\"",
                 "ans1":"No, because being required to speak at the lineup, while compelled, was not testimonial or communicative.",
                 "ans2":"No, because testimony of a witness based on firsthand observation is not subject to exclusion as the fruit of the poisonous tree.",
                 "ans3":"Yes, because the defendant was compelled to speak at the lineup, and this compelled speech led to the witness's identification testimony.",
                 "ans4":"Yes, because the defendant was never informed that he could refuse to make a statement and that any statement could be used as evidence against him.",
                 "key":"1"
         },
         "19": {
                 "question":"A federal officer had probable cause to believe a woman had participated in a bank robbery. Two days after the robbery, the woman checked into a local hotel room. When the woman left for the evening, the hotel manager opened the hotel room door so the officer could enter the room and look inside. The officer did not find any of the stolen money but did see, lying open on the bed, the woman's diary. The diary contained an entry describing the woman's involvement in robbing the bank.<br><br>The woman was charged in federal court with bank robbery. She moved to suppress the diary.<br><br>Should the court suppress the diary?\"",
                 "ans1":"Yes, because the officer had no warrant.",
                 "ans2":"Yes, because admitting the diary would violate the woman's privilege against self-incrimination.",
                 "ans3":"No, because the hotel manager had actual authority to allow the officer into the hotel room.",
                 "ans4":"No, because the officer reasonably relied on the hotel manager's apparent authority to allow the officer into the hotel room.",
                 "key":"1"
         },
         "20": {
                 "question":"A federal grand jury was investigating drug trafficking in the jurisdiction. It subpoenaed a witness to testify, and the prosecutor advised the witness that he had a Fifth Amendment privilege not to testify if he so chose. The witness asked that his counsel be allowed to advise him inside the grand jury room, but the prosecutor refused to allow the attorney inside. The witness, after speaking with his attorney outside the grand jury room, decided to testify and ended up making self-incriminating statements. <br><br>The witness subsequently was indicted for drug crimes. The indictment was based on the witness's grand jury testimony and on evidence seized in an unconstitutional search of the witness's home.<br><br>The witness moved to dismiss the indictment.<br><br>Should the court dismiss the indictment?\"",
                 "ans1":"Yes, because the witness was denied his constitutional right to advice of counsel.",
                 "ans2":"Yes, because the indictment was based upon illegally seized evidence.",
                 "ans3":"No, because the witness waived his constitutional rights by testifying.",
                 "ans4":"No, because the witness had no right to counsel inside the grand jury room and the illegally seized evidence did not affect the validity of the indictment.",
                 "key":"4"
         },
         "21": {
                 "question":"United States customs officials received an anonymous tip that heroin would be found inside a distinctively marked red package mailed from a foreign country to the United States. Pursuant to this tip, United States customs officers opened the red package and found heroin inside. They then resealed the package and left the heroin inside it. The FBI was notified and, as agents watched, the package was delivered to the address.<br><br>The FBI then secured a warrant to search the house for the package. About two hours after the package was delivered, the warrant was executed at the house. The man who opened the door was arrested, and the agents found the package, unopened, in an upstairs bedroom closet. After seizing the package, the agents looked through the rest of the house. In a footlocker in the basement, they found a machine gun.<br><br>The man was charged with, among other crimes, unlawful possession of the machine gun. He moved to suppress its use as evidence.<br><br>Should the court grant the motion to suppress the machine gun?\"",
                 "ans1":"Yes, because the search exceeded the authority granted by the warrant.",
                 "ans2":"Yes, because the initial search by the customs officers was without probable cause.",
                 "ans3":"No, because, having found the package, the agents had probable cause to believe more narcotics could be located in the house and the gun was found in a proper search for narcotics.",
                 "ans4":"No, because narcotics dealers are often armed and the search was justified to protect the agents.",
                 "key":"1"
         },
         "22": {
                 "question":"In a city, a number of armed bank robberies were committed near closing time by a masked man wearing a white hooded sweatshirt and blue sweatpants. Police saw a man wearing a white hooded sweatshirt and blue sweatpants pacing nervously outside one of the city's banks just before it closed. The police stopped the man and frisked the outer layers of his clothing for weapons, but found none. They asked the man what he was doing outside the bank and pointed out that he was wearing clothing similar to clothing worn by the perpetrator of recent robberies. After pausing for several moments, the man confessed. The police had not provided him with any Miranda warnings.<br><br>After being charged with the bank robberies, the man moved to suppress his confession. The parties agreed, and the court properly found, that the police had reasonable suspicion but not probable cause at all times before the man confessed.<br><br>Should the man's motion to suppress be granted?\"",
                 "ans1":"Yes, because the confession was the fruit of a Fourth Amendment violation, even though there was no Miranda violation.",
                 "ans2":"Yes, because the confession was the fruit of a Miranda violation, even though there was no Fourth Amendment violation.",
                 "ans3":"Yes, because the confession was the fruit of both a Fourth Amendment violation and a Miranda violation.",
                 "ans4":"No, because there was neither a Fourth Amendment violation nor a Miranda violation.",
                 "key":"4"
         },
         "22": {
                 "question":"A driver stopped at a red light in his home state. A stranger opened the passenger door, got in, and pointed a gun at the driver. The stranger then directed the driver to keep driving. They drove several miles, crossed into a neighboring state, and drove several more miles. When they reached a remote location, the stranger ordered the driver to pull over. The stranger then robbed the driver of his wallet and cash, and ordered him out of the car. The stranger drove off in the driver's car.<br><br>The stranger is charged with kidnapping in the neighboring state, which has adopted the Model Penal Code.<br><br>Could the stranger properly be convicted of kidnapping in the neighboring state?\"",
                 "ans1":"Yes, because the driver was transported under threat of force in the neighboring state.",
                 "ans2":"Yes, because the driver in effect paid ransom for his release.",
                 "ans3":"No, because any kidnapping took place in the driver's home state.",
                 "ans4":"No, because the restraint was incidental to the robbery.",
                 "key":"1"
         }
     }

      return {
         getSetSize: function(){
            return Object.keys(qData).length;

        },
         getQuestion: function(qNumber) {
                var questionNumber = qNumber;
                console.log(qData[questionNumber]);
                return qData[questionNumber];
         },
         getQBase: function() {
             return qData;
         }
     }


});
