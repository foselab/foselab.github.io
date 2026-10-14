window.foselabSearchEntries = [
  
  
    
  
    
      
        {
          title: "About",
          description: "",
          text: "Complex software should be understandable, testable, and dependable. At FOSELAB, the Formal Methods \u0026amp; Software Engineering group at the University of Bergamo, we bring rigorous methods into the design and development of systems that must behave reliably. We use model-driven engineering, software architecture, UML, and Abstract State Machines to describe systems precisely. With the ASMETA toolset, simulation, scenario-based validation, model checking, and runtime monitoring, we examine how designs behave, how components interact, and whether key requirements continue to hold. We also develop model-based, combinatorial, and search-based testing techniques to find failures and keep tests useful as software evolves. We apply these methods to the safety of cyber-physical, autonomous, and self-adaptive systems, including drones, vehicles, and medical devices. We explore how language models can assist formal specification and how to validate synthetic data when real-world data is limited.",
          section: "Pages",
          url: "/"
        },
      
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      
        {
          title: "Research",
          description: "Modelling, verification, and testing methods for dependable software-intensive systems.",
          text: "We develop methods and tools to make complex software systems easier to design, analyse, and test. Our work connects formal methods with software engineering: we use precise models to describe how a system should behave, then check those models and the software built from them against its requirements. 01Modelling and software architectureWe use model-driven engineering, UML-based languages, software architecture descriptions, and Abstract State Machines to represent the behaviour and structure of a system before implementation. These models help us make requirements precise, explore design choices, and connect specifications to executable software. ASMETA brings together tools for working with Abstract State Machine models throughout this process. 02Validation and verificationWe examine whether models and implementations behave as intended through simulation, scenario-based validation, and model checking. We also study how to analyse systems built from interacting components and how to monitor important properties while a system is running. This work helps identify design errors and assess the effect of changes before they reach deployed software. 03Software testingWe develop model-based, combinatorial, and search-based testing techniques to generate useful test cases and reveal failures. Our work covers state-based systems, software product lines whose features evolve, and controllers described in simulation environments. We also evaluate test effectiveness and look for ways to keep tests reliable as models and requirements change. 04Dependable and data-driven systemsWe apply these methods to cyber-physical systems, autonomous behaviour, and medical software, where faults can affect safety. We analyse failures, check whether software updates preserve required behaviour, and use models to enforce safety constraints at runtime. We also investigate how language models can assist formal specification and how to validate data used by software when real-world datasets are limited. Application domains Our case studies include autonomous vehicles, drones, e-bikes, medical devices, and self-adaptive systems. Meet our group, explore our projects and industry collaborations, read our publications, and discover our tools.",
          section: "Pages",
          url: "/research/"
        },
      
    
  
    
      
        {
          title: "People",
          description: "The researchers behind our models, methods, and tools.",
          text: "Faculty Angelo GargantiniFull Professor Patrizia ScandurraAssociate Professor Claudio MenghiAssociate Professor Silvia BonfantiAssistant Professor (RTT) Researcher Andrea BombardaResearcher (RTD-A) Postdoc César CornejoPostdoc PhD Nico PellegrinelliPhD Student Aurora ZanengaPhD Student Former members Asma Taheri MonfaredPostdocNicola ZeniResearcher (RTD-A)Marco RadavelliPhD (2019)Paolo VavassoriPhD (2017) Collaborators (past and present) Elvinia RiccobeneUniversity of Milan, Milan, ItalyPaolo ArcainiSimula Research Laboratory, Oslo, NorwayLionel C. BriandUniversity of Ottawa, Ottawa, Canada; Research Ireland Lero Centre, University of Limerick, Limerick, IrelandMarsha ChechikUniversity of Toronto, Toronto, CanadaMatteo CamilliPolitecnico di Milano, Milan, Italy Master students since 2024 2026 Claudio BorsaniDaniele GrecoAndrea RotaLuca Carminati 2025 Isaac MaffeisDaniele BerettaStefano GregisLuca CavagnisFederico ImbertiSabrin MaatougSimone RonzoniArash AbediTommaso Garbin 2024 Nico PellegrinelliAlessandro ColomboGionatha PirolaNunzio Marco BiscegliaAurora Zanenga",
          section: "Pages",
          url: "/people/"
        },
      
    
  
    
      
        {
          title: "Projects",
          description: "Research collaborations tackling complex software challenges.",
          text: "PNRR ANTHEM AdvaNced Technologies for Human-centrEd Medicine FISR MVM ADAPT Bringing adaptation to ventilators PRIN 2022 SAFEST Trust assurance of Digital Twins for medical CPSs PNRR PE CHANGES Cultural Heritage Active Innovation for Sustainable Society QUASMED Quality of Medical Software",
          section: "Pages",
          url: "/projects/"
        },
      
    
  
    
  
    
      
        {
          title: "Industry \u0026 Academic Collaborations",
          description: "Research collaborations on requirements, testing, safety, data validation, and software optimisation.",
          text: "We work with industry, healthcare, and academic partners on requirements, testing, safety, data validation, and software optimisation. Our collaborations have involved Requirements verification Identifying gaps and contradictions in requirements tables, and verifying that models capture the intended behaviour. Test generation and evaluation Generating tests from software and control models, measuring coverage, and assessing their ability to reveal faults. Fault and safety analysis Simulating component faults, examining their effects, and supporting the development and validation of safety-critical software. Synthetic data validation Defining which properties synthetic datasets must preserve and assessing their suitability when real-world data is scarce. AI robustness assessment Testing how neural networks respond to realistic input variations and evaluating ways to improve the reliability of their predictions. Software configuration tuning Using domain knowledge and constraints to select resource configurations that balance application performance and infrastructure costs. Let’s work together Bring us a requirements, testing, safety, data, or configuration problem. We can investigate it together through a case study, prototype, student thesis, doctoral project, or joint research proposal. For collaborations, contact Angelo Gargantini at angelo.gargantini@unibg.it.",
          section: "Pages",
          url: "/industry/"
        },
      
    
  
    
      
        {
          title: "Publications",
          description: "Ideas, methods, and results from our research, in chronological order.",
          text: "2026 2026 Evaluating Coverage and Fault Detection Capability of Scenario-Based Validation of Asmeta Specifications Andrea Bombarda, Silvia Bonfanti, Cesar Cornejo, Angelo Gargantini, and Nico Pellegrinelli In NASA Formal Methods, 2026 Abs DOI Bib Funding: ANTHEM Scenario-based validation is a widely used technique for assessing the correctness of executable formal specifications, yet its effectiveness strongly depends on the adequacy of the scenarios used. Coverage measures have been commonly adopted to evaluate scenario adequacy, but it remains unclear whether higher coverage correlates with improved fault detection, especially at the level of formal specifications. While this relationship has been extensively studied for source code, it has received little attention in the context of executable formal models. In this paper, we investigate the relationship between coverage and fault detection capability for scenario-based validation of Asmeta specifications. We extend the AsmetaV tool with an extensive set of coverage criteria that go beyond existing macro rule coverage. To assess the effectiveness of these coverage criteria, we introduce a set of mutation operators for Asmeta specifications and conduct a large-scale mutation-based experimental study, based on scenarios generated through model-checking-based, random, and evolutionary techniques. Our results show that higher coverage is generally correlated with increased fault detection capability, but macro rule coverage alone is insufficient to capture scenario effectiveness and more fine-grained coverage criteria provide stronger correlation with mutation scores and lead to improved fault detection. @inproceedings{bombarda2026evaluating, author = {Bombarda, Andrea and Bonfanti, Silvia and Cornejo, Cesar and Gargantini, Angelo and Pellegrinelli, Nico}, title = {Evaluating Coverage and Fault Detection Capability of Scenario-Based Validation of Asmeta Specifications}, booktitle = {NASA Formal Methods}, year = {2026}, publisher = {Springer Nature Switzerland}, pages = {391--411}, isbn = {978-3-032-28079-4}, doi = {10.1007/978-3-032-28079-4_18}, url = {https://doi.org/10.1007/978-3-032-28079-4_18} } Can Large Language Models Support Modeling Systems with ASMETA? A Case Study with a Planetary Rover Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Nico Pellegrinelli In Rigorous State-Based Methods, 2026 Abs DOI Bib Funding: ANTHEM Formal modeling languages provide strong support for the specification, analysis, and validation of cyber-physical systems, but their adoption in practice is often hindered by the effort and expertise that are required to produce correct and complete models. In this paper, we investigate whether Large Language Models (LLMs) can support the modeling process by assisting in the generation and refinement of ASMETA specifications from natural language requirements. We propose an iterative and human-in-the-loop workflow in which an LLM is used to derive an initial ASMETA model, progressively refine it, and support scenario-based validation using existing ASMETA tools. The approach explicitly combines automated assistance with human inspection to mitigate modeling errors and potential biases introduced by the LLM. We evaluate the feasibility and effectiveness of this workflow through a case study based on the ABZ 2026 planetary rover problem, using GPT-5.2, accessed via the ChatGPT interface and leveraging the Projects functionality to support persistent and multi-iteration interactions. Our experience suggests that LLMs can significantly lower the entry barrier to formal modeling and support engineers by accelerating the creation of analyzable ASMETA artifacts, but expert oversight is necessary to ensure correctness, completeness, and alignment with stakeholder intent. @inproceedings{Bombarda2026llm, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Pellegrinelli, Nico}, editor = {Ishikawa, Fuyuki and Cunha, Alcino}, title = {Can Large Language Models Support Modeling Systems with ASMETA? A Case Study with a Planetary Rover}, booktitle = {Rigorous State-Based Methods}, year = {2026}, publisher = {Springer Nature Switzerland}, address = {Cham}, pages = {291--309}, isbn = {978-3-032-26752-8}, doi = {10.1007/978-3-032-26752-8_19}, url = {https://doi.org/10.1007/978-3-032-26752-8_19} } Evaluating the Practical Impact of Parallelism in Asmeta Andrea Bombarda, Silvia Bonfanti, Cesar Cornejo, Angelo Gargantini, and Nico Pellegrinelli In Rigorous State-Based Methods, 2026 Abs DOI Bib Funding: ANTHEM Parallelism is a key semantic feature of Abstract State Machines (ASMs), represented in the Asmeta tool set by the par construct, which enables synchronous execution of multiple rules. While its theoretical importance is firmly grounded in the ASM formalism, which models synchronous updates through parallel rule execution, an evaluation of its real usefulness in real-world models has received limited attention. This paper presents an experimental study evaluating how and when parallelism is effectively used in Asmeta. We analyzed existing specifications to measure the adoption of the par construct, and generated sequential variants replacing par with seq to compare behavior through randomized test suites. Our findings show that par is widely adopted and useful: it rather frequently produces results different from those obtained by sequential execution. @inproceedings{Bombarda2026parallelism, author = {Bombarda, Andrea and Bonfanti, Silvia and Cornejo, Cesar and Gargantini, Angelo and Pellegrinelli, Nico}, editor = {Ishikawa, Fuyuki and Cunha, Alcino}, title = {Evaluating the Practical Impact of Parallelism in Asmeta}, booktitle = {Rigorous State-Based Methods}, year = {2026}, publisher = {Springer Nature Switzerland}, address = {Cham}, pages = {248--255}, isbn = {978-3-032-26752-8}, doi = {10.1007/978-3-032-26752-8_15}, url = {https://doi.org/10.1007/978-3-032-26752-8_15} } A Bibliometric Analysis of the Abstract State Machine Research Production and Community over the Years Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Nico Pellegrinelli In Rigorous Methods in Theory and Practice: Essays Dedicated to Egon Börger on the Occasion of His 80th Birthday, 2026 Abs DOI Bib Funding: ANTHEM Abstract State Machines (ASMs) constitute a well-established formal method for system specification and modeling, with applications spanning software engineering, hardware design, and semantics. Despite their long-standing theoretical foundations and practical use, a systematic assessment of the current status and impact of ASMs within the scientific community remains limited. This paper presents a bibliometric study aimed at evaluating the evolution, visibility, and influence of the ASM formalism over time. Using data extracted from major scientific publication databases, we analyze publication trends, citation patterns, core venues, and collaboration networks related to ASM research. Quantitative indicators such as citation counts, h-index values, and co-authorship structures are employed to identify key contributions, influential authors, and emerging research directions. The results provide an evidence-based perspective on the maturity and dissemination of ASMs, highlighting periods of growth, stabilization, and thematic shifts. By demonstrating how bibliometric information can be used to assess the status of a formal method, this study contributes both to the understanding of ASMs and to the broader methodological discussion on evaluating research impact in formal methods. @inproceedings{Bombarda2026biblio, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Pellegrinelli, Nico}, editor = {Raschke, Alexander and Riccobene, Elvinia and Schewe, Klaus-Dieter and Thalheim, Bernhard}, title = {A Bibliometric Analysis of the Abstract State Machine Research Production and Community over the Years}, booktitle = {Rigorous Methods in Theory and Practice: Essays Dedicated to Egon B{\\\"o}rger on the Occasion of His 80th Birthday}, year = {2026}, publisher = {Springer Nature Switzerland}, address = {Cham}, pages = {30--46}, isbn = {978-3-032-24494-9}, doi = {10.1007/978-3-032-24494-9_3}, url = {https://doi.org/10.1007/978-3-032-24494-9_3}, } 2025 2025 My feature model has changed... What should I do with my tests? Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini Journal of Systems and Software, 2025 DOI Bib PDF Funding: SAFEST, ANTHEM @article{BOMBARDA2026112645, title = {My feature model has changed... What should I do with my tests?}, journal = {Journal of Systems and Software}, volume = {231}, pages = {112645}, year = {2025}, issn = {0164-1212}, doi = {https://doi.org/10.1016/j.jss.2025.112645}, url = {https://www.sciencedirect.com/science/article/pii/S0164121225003140}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, keywords = {Feature models evolution, Specificity, Dissimilarity, Mutation score}, } Test Case Generation for Simulink Models: An Experience from the E-Bike Domain Michael Marzella, Andrea Bombarda, Marcello Minervini, Nunzio Marco Bisceglia, Angelo Gargantini, and Claudio Menghi In Symposium on Search-Based Software Engineering (SSBSE) - RENE/NIER Track, 2025 Bib PDF Funding: SMIMI, MOST, GLACIATION, ANTHEM @inproceedings{marzella2025test, title = {Test Case Generation for Simulink Models: An Experience from the E-Bike Domain}, author = {Marzella, Michael and Bombarda, Andrea and Minervini, Marcello and Bisceglia, Nunzio Marco and Gargantini, Angelo and Menghi, Claudio}, booktitle = {Symposium on Search-Based Software Engineering (SSBSE) - RENE/NIER Track}, year = {2025} } Assessing the Usefulness of Assurance Cases: Experience With the Large Hadron Collider Torin Viger, Jeff Joyce, Simon Diemert, Claudio Menghi, Marsha Chechik, Jan Uythoven, Markus Zerlauth, and 1 more author Systems Engineering, 2025 DOI Bib PDF Funding: SMIMI, MOST, GLACIATION @article{sys70010, author = {Viger, Torin and Joyce, Jeff and Diemert, Simon and Menghi, Claudio and Chechik, Marsha and Uythoven, Jan and Zerlauth, Markus and Felsberger, Lukas}, title = {Assessing the Usefulness of Assurance Cases: Experience With the Large Hadron Collider}, journal = {Systems Engineering}, doi = {https://doi.org/10.1002/sys.70010}, year = {2025}, } Completeness and Consistency of Tabular Requirements: An SMT-Based Verification Approach Claudio Menghi, Eugene Balai, Darren Valovcin, Christoph Sticksel, and Akshay Rajhans IEEE Transactions on Software Engineering, 2025 DOI Bib PDF Funding: SMIMI, MOST @article{10844918, author = {Menghi, Claudio and Balai, Eugene and Valovcin, Darren and Sticksel, Christoph and Rajhans, Akshay}, journal = {IEEE Transactions on Software Engineering}, title = {Completeness and Consistency of Tabular Requirements: An SMT-Based Verification Approach}, year = {2025}, volume = {51}, number = {2}, pages = {595-620}, doi = {10.1109/TSE.2025.3530820}, } Efficient and scalable designs for ternary quantum reversible multiplexer and demultiplexer systems Asma Taheri Monfared, Andrea Bombarda, Angelo Gargantini, and Majid Haghparast Quantum Information Processing, Sep 2025 DOI Bib PDF Funding: SAFEST @article{taheri2025efficient, author = {Taheri Monfared, Asma and Bombarda, Andrea and Gargantini, Angelo and Haghparast, Majid}, journal = {Quantum Information Processing}, title = {Efficient and scalable designs for ternary quantum reversible multiplexer and demultiplexer systems}, year = {2025}, issn = {1573-1332}, month = sep, number = {10}, pages = {308}, volume = {24}, doi = {10.1007/s11128-025-04927-y}, publisher = {Springer} } Balanced ternary reversible comparator for qutrit quantum circuits Asma Taheri Monfared, Valentina Ciriani, and Majid Haghparast Journal of Physics A: Mathematical and Theoretical, Jun 2025 DOI Bib PDF Funding: SAFEST @article{monfared2025balanced, author = {Taheri Monfared, Asma and Ciriani, Valentina and Haghparast, Majid}, journal = {Journal of Physics A: Mathematical and Theoretical}, title = {Balanced ternary reversible comparator for qutrit quantum circuits}, year = {2025}, issn = {1751-8121}, month = jun, number = {24}, pages = {245305}, volume = {58}, doi = {10.1088/1751-8121/ade1b8}, publisher = {IOP Publishing} } Can Generative AI Produce Test Cases? An Experience from the Automotive Domain Stephen Wynn-Williams, Ryan Tyrrell, Vera Pantelic, Mark Lawford, Claudio Menghi, Phaneendra Nalla, and Hassan Artail In Proceedings of the 33rd ACM International Conference on the Foundations of Software Engineering, Jun 2025 DOI PDF Funding: SMIMI, MOST, GLACIATION Formal specification and validation of the MVM-Adapt system using Compositional I/O Abstract State Machines Silvia Bonfanti, Elvinia Riccobene, and Patrizia Scandurra SCIENCE OF COMPUTER PROGRAMMING, Jun 2025 DOI Bib PDF Funding: MVM-Adapt, SAFEST @article{Bonfanti2025a, author = {Bonfanti, Silvia and Riccobene, Elvinia and Scandurra, Patrizia}, journal = {SCIENCE OF COMPUTER PROGRAMMING}, title = {Formal specification and validation of the MVM-Adapt system using Compositional I/O Abstract State Machines}, year = {2025}, number = {Art. n. 103299}, pages = {1--21}, volume = {244}, doi = {https://doi.org/10.1016/j.scico.2025.103299}, } A Compositional Simulation Framework for Abstract State Machine Models of Discrete Event Systems Silvia Bonfanti, Angelo Gargantini, Elvinia Riccobene, and Patrizia Scandurra Formal Aspects of Computing, Mar 2025 DOI Bib PDF @article{Bonfanti2025, author = {Bonfanti, Silvia and Gargantini, Angelo and Riccobene, Elvinia and Scandurra, Patrizia}, journal = {Formal Aspects of Computing}, title = {A Compositional Simulation Framework for Abstract State Machine Models of Discrete Event Systems}, year = {2025}, issn = {1433-299X}, month = mar, number = {2}, pages = {1--26}, volume = {37}, doi = {10.1145/3652862}, publisher = {Association for Computing Machinery (ACM)} } SIMSPIRE: A Simulator of the Respiratory System Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Elvinia Riccobene IEEE Access, Mar 2025 DOI Bib HTML PDF Funding: SAFEST, ANTHEM @article{Bombarda2025g, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Riccobene, Elvinia}, journal = {IEEE Access}, title = {SIMSPIRE: A Simulator of the Respiratory System}, year = {2025}, issn = {2169-3536}, pages = {113428--113437}, volume = {13}, doi = {10.1109/ACCESS.2025.3584269}, url = {http://dx.doi.org/10.1109/ACCESS.2025.3584269}, publisher = {Institute of Electrical and Electronics Engineers (IEEE)} } Integrating formal specifications in the development and testing of UIs by formal model–view–controller pattern Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini International Journal on Software Tools for Technology Transfer, May 2025 Abs DOI Bib HTML PDF Funding: ANTHEM Ensuring software functionality, maintainability, and modularity is vital while developing UIs. For this reason, architectural patterns, like the Model–View–Controller (MVC), are usually employed. The MVC aims to separate the representation of information (model) from its presentation to the user (view). One can use a formal model to study the system and the UI, but such formal models are separately developed and analyzed, and the results of the analysis cannot be assured for the actual implementation. To address this problem, we introduced the formal MVC pattern (fMVC), allowing the integration of Asmeta specifications into the model of the MVC-designed software. This paper extends the fMVC pattern and the framework to better support Java Swing components and enhance error management, including automatic model state rollback on input failure. Moreover, we propose an extension enabling testers to generate and reuse Avalla scenarios for UI validation. We demonstrate the framework’s application, covering modeling, validation, and verification at the model level for the AMAN case study that inspired us during the definition of the fMVC pattern. Moreover, we show how the AMAN UI can be implemented and tested by our approach. @article{Bombarda2025b, title = {Integrating formal specifications in the development and testing of {UIs} by formal model–view–controller pattern}, issn = {1433-2787}, url = {https://doi.org/10.1007/s10009-025-00812-2}, doi = {10.1007/s10009-025-00812-2}, journal = {International Journal on Software Tools for Technology Transfer}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, month = may, year = {2025}, } A Flexible and Open-Source Tool for Genetic Variant Annotation Andrea Bombarda, Matteo Bellini, Maria Iascone, and Domenico Fabio Savo In Proceedings of the 18th International Joint Conference on Biomedical Engineering Systems and Technologies - HEALTHINF, May 2025 DOI Bib HTML Funding: ANTHEM @inproceedings{Bombarda2025c, author = {Bombarda, Andrea and Bellini, Matteo and Iascone, Maria and Savo, Domenico Fabio}, title = {A Flexible and Open-Source Tool for Genetic Variant Annotation}, booktitle = {Proceedings of the 18th International Joint Conference on Biomedical Engineering Systems and Technologies - HEALTHINF}, year = {2025}, pages = {406-413}, publisher = {SciTePress}, organization = {INSTICC}, doi = {10.5220/0013111600003911}, url = {https://doi.org/10.5220/0013111600003911}, isbn = {978-989-758-731-3}, issn = {2184-4305}, } A self-managing IoT-Edge-Cloud architecture for improved robustness in environmental monitoring Andrea Bombarda, Giuseppe Ruscica, and Patrizia Scandurra In Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing, Catania International Airport, Catania, Italy, May 2025 Abs DOI Bib HTML PDF Funding: ANTHEM, SMIMI The new distributed paradigm Edge-Cloud Continuum (ECC) is fundamental to provide a continuum of computing from Edge to Cloud and create more dependable Cloud-powered IoT applications. In line with this computing paradigm, this paper presents a self-managing IoT-Edge-Cloud computing architecture for enhancing robustness in environmental monitoring. In addition to the sensor data transmission to a cloud server node for late processing, a semi-decentralized self-adaptation architecture with feedback control components running on edge nodes (gateways) is adopted to monitor the end devices and make decisions in the edge. The proposed control architecture was implemented as part of SEIROB, an IoT-Edge-Cloud exemplar for air quality monitoring, using the Python programming language and the open-source ChirpStack LoRaWAN network server stack. In this paper, we share the architecture design of SEIROB, report our experiments about its effectiveness in achieving some robustness scenarios, and discuss faced challenges and lessons learned in using a ready-to-use IoT infrastructure (like the ChirpStack platform) for ECC. @inproceedings{Bombarda2025d, author = {Bombarda, Andrea and Ruscica, Giuseppe and Scandurra, Patrizia}, title = {A self-managing IoT-Edge-Cloud architecture for improved robustness in environmental monitoring}, year = {2025}, isbn = {9798400706295}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3672608.3707801}, doi = {10.1145/3672608.3707801}, booktitle = {Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing}, pages = {1738–1745}, numpages = {8}, keywords = {IoT-based environmental monitoring, software architecture for IoT-edge-cloud computing continuum, self-adaptive IoT}, location = {Catania International Airport, Catania, Italy}, series = {SAC '25}, } Welcome to the IWCT 2025 Workshop Andrea Bombarda and Bernhard Garn In 2025 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), Apr 2025 DOI Bib HTML Funding: ANTHEM @inproceedings{Bombarda2025f, author = {Bombarda, Andrea and Garn, Bernhard}, booktitle = {2025 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW)}, title = {{Welcome to the IWCT 2025 Workshop}}, year = {2025}, address = {Los Alamitos, CA, USA}, month = apr, pages = {xxi-xxii}, publisher = {IEEE Computer Society}, doi = {10.1109/ICSTW64639.2025.10962459}, issn = {2159-4848}, url = {https://doi.ieeecomputersociety.org/10.1109/ICSTW64639.2025.10962459} } Eliminating Flakiness: Deterministic Control for Validating Nondeterministic Asmeta Specifications Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Nico Pellegrinelli In NASA Formal Methods, Apr 2025 Abs DOI Bib HTML PDF Funding: ANTHEM, SMIMI Formal methods are increasingly used in the development of safety-critical systems, offering a rigorous approach from model to implementation. However, in the validation process, the nondeterminism is a hindrance in their application, as it can lead to flaky tests or flaky scenarios. Scenarios written for models that implement nondeterminism produce unpredictable outcomes by complicating model validation and reducing developer confidence. In this paper, we present an approach to address the nondeterminism in the validation phase when using the Asmeta framework. We extend the Avalla language, used for scenario specification in Asmeta, to allow deterministic control over nondeterministic choices. This extension ensures that scenarios written for nondeterministic models execute predictably by eliminating flakiness. We demonstrate our approach using a running example of an automatic coffee vending machine. @inproceedings{Bombarda2025e, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Pellegrinelli, Nico}, booktitle = {NASA Formal Methods}, title = {Eliminating Flakiness: Deterministic Control for Validating Nondeterministic Asmeta Specifications}, year = {2025}, editor = {Dutle, Aaron and Humphrey, Laura and Titolo, Laura}, pages = {100--115}, publisher = {Springer Nature Switzerland}, doi = {10.1007/978-3-031-93706-4_7}, url = {https://doi.org/10.1007/978-3-031-93706-4_7}, isbn = {9783031937064}, issn = {1611-3349}, } A Search-Based Benchmark Generator for Constrained Combinatorial Testing Models Paolo Arcaini, Andrea Bombarda, and Angelo Gargantini In 2025 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), Mar 2025 DOI Bib HTML PDF @inproceedings{Arcaini2025, author = {Arcaini, Paolo and Bombarda, Andrea and Gargantini, Angelo}, booktitle = {2025 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW)}, title = {A Search-Based Benchmark Generator for Constrained Combinatorial Testing Models}, year = {2025}, month = mar, pages = {278--287}, publisher = {IEEE}, doi = {10.1109/icstw64639.2025.10962457}, url = {https://doi.org/10.1109/icstw64639.2025.10962457}, } On the Completion of Partial Combinatorial Test Suites Andrea Bombarda and Angelo Gargantini SN Computer Science, Apr 2025 Abs DOI Bib PDF Funding: ANTHEM Combinatorial Interaction Testing is a widely used method for testing intricate systems. In most cases, the test suites are generated from scratch. However, there are cases when testers may want to reuse existing tests, in order to include them in a new test suite, both for enhancing the performance of the generation process or because those tests are valuable for checking the functioning of the system under test in critical conditions. In this paper, we propose a general framework for dealing with existing test suites using combinatorial test generators. We also discuss the definition of partial tests and test suites, and the scenarios in which partial tests should or could be reused. Finally, we compare the most common tools for completing test suites, namely ACTS, PICT, and pMEDICI+, using different incompleteness levels in the seeds. ACTS with seeds generally performed the best in terms of test suite size and generation time. The other two tools, namely PICT and pMEDICI+, were slower and produced larger test suites on average. We have found that using seeds could sometimes come with a cost, especially in the scenario where test cases are partial and completing them is not always cost-effective in terms of generation time. The choice of re-using or throwing away existing tests must be based on use case-specific requirements. We do not recommend using seeds when they are composed of partial test cases, providing that they are not required for some other reason. On the contrary, we envision the use of partial test suites when a test suite with higher strength is needed. @article{Bombarda2025, title = {On the {Completion} of {Partial} {Combinatorial} {Test} {Suites}}, volume = {6}, issn = {2661-8907}, url = {https://doi.org/10.1007/s42979-025-03937-y}, doi = {10.1007/s42979-025-03937-y}, number = {4}, journal = {SN Computer Science}, author = {Bombarda, Andrea and Gargantini, Angelo}, month = apr, year = {2025}, pages = {383}, } Introducing CreaTest: A Framework for Test Case Generation in itemis CREATE Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Nico Pellegrinelli In Testing Software and Systems, Apr 2025 Abs DOI Bib PDF Funding: SMIMI, SAFEST, ANTHEM In model-driven engineering, models are used to specify, validate, and verify the system design and generate code and tests. In all these activities, assuring the correctness of the model is paramount, as to derive correct code and tests, a correct model is required. In this paper, we introduce CreaTest, a framework designed to generate abstract tests for itemis CREATE Statecharts by leveraging existing code-based test generators. Our approach consists of translating Statecharts into executable Java code, and then applying a white-box test generation tool, like Evosuite, to produce JUnit test cases. Test cases are subsequently abstracted back into a format supported by the original modeling tool for model validation. We evaluate CreaTest on a large set of Statecharts retrieved from GitHub. Our results show that CreaTest generates high-coverage abstract tests for Statecharts and that optimizing the generated code significantly enhances the effectiveness of test generation. @inproceedings{Bombarda2025a, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Pellegrinelli, Nico}, editor = {Bonfanti, Silvia and Papadopoulos, George Angelos}, title = {Introducing {CreaTest}: A Framework for Test Case Generation in itemis {CREATE}}, booktitle = {Testing Software and Systems}, year = {2025}, publisher = {Springer Nature Switzerland}, address = {Cham}, pages = {89--106}, isbn = {978-3-032-05188-2}, doi = {10.1007/978-3-032-05188-2_7}, url = {https://doi.org/10.1007/978-3-032-05188-2_7} } Safety Enforcement for Autonomous Driving on a Simulated Highway Using Asmeta Models@run.time Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Nico Pellegrinelli, and Patrizia Scandurra In Rigorous State-Based Methods, Apr 2025 Abs DOI Bib PDF Funding: SMIMI, SAFEST, ANTHEM Mission-critical systems, such as autonomous vehicles, operate in dynamic environments where unexpected events should be managed while guaranteeing safe behavior. Ensuring the safety of these complex systems is a major open challenge and requires robust mechanisms to enforce correct behavior during runtime. This paper illustrates a runtime safety enforcement framework for the output sanitization of an autonomous driving agent on a highway. The enforcement mechanism is based on a (formally validated and verified) Asmeta model representing the enforcement rules and used at run-time to eventually steer the driving agent to behave safely and avoid collisions. We demonstrate both efficacy and efficiency of the proposed enforcement approach by conducting an experimental evaluation. We connected our safety enforcer with the highway simulation environment and co-executed it with the pre-trained (unsafe) AI agents as provided by the ABZ 2025 case study. We consider the single-lane case with the safety requirement and one scenario of the multi-lane case about preferring the right-most lane. @inproceedings{Bombarda2025h, title = {Safety Enforcement for Autonomous Driving on a Simulated Highway Using Asmeta Models@run.time}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Pellegrinelli, Nico and Scandurra, Patrizia}, year = {2025}, booktitle = {Rigorous State-Based Methods}, publisher = {Springer Nature Switzerland}, address = {Cham}, pages = {212--230}, isbn = {978-3-031-94533-5}, editor = {Leuschel, Michael and Ishikawa, Fuyuki}, doi = {10.1007/978-3-031-94533-5_13}, url = {https://doi.org/10.1007/978-3-031-94533-5_13} } Non-invasive software architecture for data pipelines with legacy support in smart manufacturing Alberto Ceselli, Giuseppe De Martino, and Patrizia Scandurra In 22nd IEEE International Conference on Software Architecture, ICSA 2025, Odense, Denmark, March 31 - April 4, 2025, Apr 2025 DOI Funding: SMIMI Software Engineering and Advanced Applications (SEAA 2025) Fabio Pievani, Asma Taheri Monfared, Andrea Bombarda, and Angelo Gargantini Sep 2025 DOI Bib PDF Funding: SAFEST @inbook{Pievani_2025, author = {Pievani, Fabio and Taheri Monfared, Asma and Bombarda, Andrea and Gargantini, Angelo}, chapter = {QuTiP-MRL: A Library for Multiple-Valued Reversible Logic Simulations}, editor = {Taibi, Davide and Smite, Darja}, pages = {419--427}, publisher = {Springer Nature Switzerland}, title = {Software Engineering and Advanced Applications (SEAA 2025)}, year = {2025}, isbn = {9783032042071}, month = sep, booktitle = {Software Engineering and Advanced Applications}, doi = {10.1007/978-3-032-04207-1_28}, issn = {1611-3349}, } Theano: A Tool for Verifying the Consistency and Completeness in Tabular Requirements Aurora Francesca Zanenga, Nunzio Marco Bisceglia, Benedetta Ippoliti, Andrea Bombarda, Angelo Gargantini, Akshay Rajhans, and Claudio Menghi In ACM International Conference on the Foundations of Software Engineering (FSE) — Demonstration Track, Clarion Hotel Trondheim, Trondheim, Norway, Jun 2025 Abs DOI Bib PDF Funding: SMIMI, MOST, GLACIATION, ANTHEM Tabular requirements prescribe software behavior through an \"if-then\" paradigm. Verifying the consistency and completeness of tabular requirements is crucial, as it can identify specification errors, reduce development time and costs, and help prevent potential failures. Theano is a verification tool designed to ensure the consistency and completeness of tabular requirements formulated with Simulink Requirements Tables. This demonstration paper presents the key features of Theano, illustrates its application through an automotive case study, and discusses the underlying implementation and design choices. An online video walkthrough of the case study is also available: youtu.be/p71bKupmRUQ @inproceedings{zanenga2025theano, author = {Zanenga, Aurora Francesca and Bisceglia, Nunzio Marco and Ippoliti, Benedetta and Bombarda, Andrea and Gargantini, Angelo and Rajhans, Akshay and Menghi, Claudio}, booktitle = {ACM International Conference on the Foundations of Software Engineering (FSE) --- Demonstration Track}, title = {Theano: A Tool for Verifying the Consistency and Completeness in Tabular Requirements}, year = {2025}, address = {New York, NY, USA}, month = jun, pages = {1148--1152}, publisher = {Association for Computing Machinery}, series = {FSE Companion ’25}, collection = {FSE Companion ’25}, doi = {10.1145/3696630.3728599}, isbn = {9798400712760}, keywords = {simulink, requirements table, tabular expressions, consistency, completeness}, location = {Clarion Hotel Trondheim, Trondheim, Norway}, numpages = {5}, url = {https://doi.org/10.1145/3696630.3728599}, } Automated Phenotype-Based Clustering of Clinical Reports Using Large Language Models Martina Saletta, Andrea Bombarda, Matteo Bellini, Lucrezia Goisis, Paolo Cazzaniga, Maria Iascone, and Domenico Fabio Savo In Artificial Intelligence in Medicine, Jun 2025 Abs DOI Bib HTML Funding: ANTHEM Large Language Models (LLMs) have shown significant potential in natural language processing tasks, including various applications in clinical and biomedical domains. This study explores the use of LLMs for analyzing a real dataset from Italian clinical reports and proposes a pipeline for automatically clustering these reports based on the described symptoms. The pipeline incorporates two approaches: (1) direct analysis of textual descriptions in the clinical reports, and (2) standardized processing through the automatic extraction of Human Phenotype Ontology terms using LLM-based methods. The obtained clusters will serve as the foundation for further predictive analyses, such as estimating the likelihood of a patient carrying specific genetic mutations. Our investigation compares the performance of direct text analysis against phenotype-standardized descriptions, highlighting the strengths and limitations of each approach. @inproceedings{Saletta2025, author = {Saletta, Martina and Bombarda, Andrea and Bellini, Matteo and Goisis, Lucrezia and Cazzaniga, Paolo and Iascone, Maria and Savo, Domenico Fabio}, booktitle = {Artificial Intelligence in Medicine}, title = {Automated Phenotype-Based Clustering of Clinical Reports Using Large Language Models}, year = {2025}, address = {Cham}, editor = {Bellazzi, Riccardo and Juarez Herrero, Jos{\\'e} Manuel and Sacchi, Lucia and Zupan, Bla{\\v{z}}}, pages = {345--350}, publisher = {Springer Nature Switzerland}, doi = {10.1007/978-3-031-95841-0_64}, isbn = {978-3-031-95841-0}, issn = {1611-3349}, url = {https://doi.org/10.1007/978-3-031-95841-0_64} } Genetic algorithm for path-based testing of component outage situations in IoT system processes Matej Klima, Miroslav Bures, Bestoun S. Ahmed, Hanan Hindy, Xavier Bellekens, and Angelo Gargantini Applied Soft Computing, Dec 2025 DOI 2024 2024 Arch-comp 2024 category report: Falsification Tanmay Khandait, Federico Formica, Paolo Arcaini, Surdeep Chotaliya, Georgios Fainekos, Abdelrahman Hekal, Atanu Kundu, and 4 more authors In International Workshop on Applied Verification for Continuous and Hybrid Systems, Dec 2024 Bib PDF Funding: SMIMI, MOST, GLACIATION @inproceedings{khandait2024arch, title = {Arch-comp 2024 category report: Falsification}, author = {Khandait, Tanmay and Formica, Federico and Arcaini, Paolo and Chotaliya, Surdeep and Fainekos, Georgios and Hekal, Abdelrahman and Kundu, Atanu and Lew, Ethan and Loreti, Michele and Menghi, Claudio and others}, booktitle = {International Workshop on Applied Verification for Continuous and Hybrid Systems}, pages = {122--144}, year = {2024}, organization = {EasyChair} } A journey with ASMETA from requirements to code: application to an automotive system with adaptive features Paolo Arcaini, Silvia Bonfanti, Angelo Michele Gargantini, Elvinia Riccobene, and Patrizia Scandurra INTERNATIONAL JOURNAL ON SOFTWARE TOOLS FOR TECHNOLOGY TRANSFER, Dec 2024 DOI Bib @article{10446_274189, author = {Arcaini, Paolo and Bonfanti, Silvia and Gargantini, Angelo Michele and Riccobene, Elvinia and Scandurra, Patrizia}, title = {A journey with ASMETA from requirements to code: application to an automotive system with adaptive features}, journal = {INTERNATIONAL JOURNAL ON SOFTWARE TOOLS FOR TECHNOLOGY TRANSFER}, year = {2024}, volume = {26}, number = {3}, pages = {379--401}, doi = {https://doi.org/10.1007/s10009-024-00751-4}, } A Framework for Including Uncertainty in Robustness Evaluation of Bayesian Neural Network Classifiers Wasim Essbai, Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In Proceedings of the 5th IEEE/ACM International Workshop on Deep Learning for Testing and Testing for Deep Learning, Lisbon, Portugal, Dec 2024 Abs DOI Bib HTML Funding: ANTHEM Neural networks (NNs) play a crucial role in safety-critical fields, requiring robustness assurance. Bayesian Neural Networks (BNNs) address data uncertainty, providing probabilistic outputs. However, the literature on BNN robustness assessment is still limited, mainly focusing on adversarial examples, which are often impractical in real-world applications. This paper introduces a fresh perspective on BNN classifier robustness, considering natural input variations while accounting for prediction uncertainties. Our approach excludes predictions labeled as \"unknown\", enabling practitioners to define alteration probabilities, penalize errors beyond a specified threshold, and tolerate varying error levels below it. We present a systematic approach for evaluating the robustness of BNNs, introducing new evaluation metrics that account for prediction uncertainty. We conduct a comparative study using two NNs - standard MLP and Bayesian MLP - on the MNIST dataset. Our results show that by leveraging estimated uncertainty, it is possible to enhance the system’s robustness. @inproceedings{Bombarda2024e, author = {Essbai, Wasim and Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {A Framework for Including Uncertainty in Robustness Evaluation of Bayesian Neural Network Classifiers}, year = {2024}, isbn = {9798400705748}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3643786.3648026}, doi = {10.1145/3643786.3648026}, booktitle = {Proceedings of the 5th IEEE/ACM International Workshop on Deep Learning for Testing and Testing for Deep Learning}, pages = {25–32}, numpages = {8}, keywords = {robustness, bayesian neural networks, alterations, uncertainty}, location = {Lisbon, Portugal}, series = {DeepTest '24}, } Evaluation Framework for Autonomous Systems: The Case of Programmable Electronic Medical Systems Andrea Bombarda, Silvia Bonfanti, Martina De Sanctis, Angelo Gargantini, Patrizio Pelliccione, Elvinia Riccobene, and Patrizia Scandurra IEEE Transactions on Software Engineering, Dec 2024 DOI Bib HTML Funding: ANTHEM, CHANGES, MVM-Adapt @article{Bombarda2024c, author = {Bombarda, Andrea and Bonfanti, Silvia and De Sanctis, Martina and Gargantini, Angelo and Pelliccione, Patrizio and Riccobene, Elvinia and Scandurra, Patrizia}, journal = {IEEE Transactions on Software Engineering}, title = {Evaluation Framework for Autonomous Systems: The Case of Programmable Electronic Medical Systems}, year = {2024}, volume = {50}, number = {4}, pages = {995-1014}, keywords = {Lenses;Robots;Autonomous systems;Instruments;Robot sensing systems;Ventilators;Adaptive systems;Autonomous systems;evaluation framework;programmable electronic medical systems (PEMS)}, doi = {10.1109/TSE.2024.3374382}, url = {https://doi.org/10.1109/TSE.2024.3374382}, } State of the CArt: evaluating covering array generators at scale Manuel Leithner, Andrea Bombarda, Michael Wagner, Angelo Gargantini, and Dimitris E. Simos International Journal on Software Tools for Technology Transfer, May 2024 DOI Bib HTML Funding: ANTHEM @article{Bombarda2024d, title = {State of the CArt: evaluating covering array generators at scale}, issn = {1433-2787}, url = {http://dx.doi.org/10.1007/s10009-024-00745-2}, doi = {10.1007/s10009-024-00745-2}, journal = {International Journal on Software Tools for Technology Transfer}, publisher = {Springer Science and Business Media LLC}, author = {Leithner, Manuel and Bombarda, Andrea and Wagner, Michael and Gargantini, Angelo and Simos, Dimitris E.}, year = {2024}, month = may, } An Android App for Training New Doctors in Mechanical Ventilation Andrea Bombarda, Sara Millefiori, Michela Penzo, Luca Novelli, and Angelo Gargantini In Proceedings of the 17th International Joint Conference on Biomedical Engineering Systems and Technologies, May 2024 DOI Bib HTML Funding: ANTHEM @inproceedings{Bombarda2024b, title = {An Android App for Training New Doctors in Mechanical Ventilation}, url = {http://dx.doi.org/10.5220/0012323900003657}, doi = {10.5220/0012323900003657}, booktitle = {Proceedings of the 17th International Joint Conference on Biomedical Engineering Systems and Technologies}, publisher = {SCITEPRESS - Science and Technology Publications}, author = {Bombarda, Andrea and Millefiori, Sara and Penzo, Michela and Novelli, Luca and Gargantini, Angelo}, year = {2024}, } Design, implementation, and validation of a benchmark generator for combinatorial interaction testing tools Andrea Bombarda and Angelo Gargantini Journal of Systems and Software, Mar 2024 DOI Bib HTML Funding: ANTHEM @article{Bombarda2024, title = {Design, implementation, and validation of a benchmark generator for combinatorial interaction testing tools}, volume = {209}, issn = {0164-1212}, url = {http://dx.doi.org/10.1016/j.jss.2023.111920}, doi = {10.1016/j.jss.2023.111920}, journal = {Journal of Systems and Software}, publisher = {Elsevier BV}, author = {Bombarda, Andrea and Gargantini, Angelo}, year = {2024}, month = mar, pages = {111920}, } ASMETA Tool Set for Rigorous System Design Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Elvinia Riccobene, and Patrizia Scandurra In Formal Methods, Sep 2024 DOI Bib HTML PDF Funding: ANTHEM, SMIMI @inproceedings{Bombarda2024f, title = {ASMETA Tool Set for Rigorous System Design}, isbn = {9783031711770}, issn = {1611-3349}, url = {http://dx.doi.org/10.1007/978-3-031-71177-0_28}, doi = {10.1007/978-3-031-71177-0_28}, booktitle = {Formal Methods}, publisher = {Springer Nature Switzerland}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Riccobene, Elvinia and Scandurra, Patrizia}, year = {2024}, month = sep, pages = {492–517}, } On the Use of Multi-valued Decision Diagrams to Count Valid Configurations of Feature Models Andrea Bombarda and Angelo Gargantini In 28th ACM International Systems and Software Product Line Conference, Sep 2024 DOI Bib HTML PDF Funding: ANTHEM, SMIMI @inproceedings{Bombarda2024j, series = {SPLC ’24}, title = {On the Use of Multi-valued Decision Diagrams to Count Valid Configurations of Feature Models}, url = {http://dx.doi.org/10.1145/3646548.3672594}, doi = {10.1145/3646548.3672594}, booktitle = {28th ACM International Systems and Software Product Line Conference}, publisher = {ACM}, author = {Bombarda, Andrea and Gargantini, Angelo}, year = {2024}, month = sep, pages = {96–106}, collection = {SPLC ’24}, } The Mechanical Lung Ventilator Case Study Silvia Bonfanti and Angelo Michele Gargantini Sep 2024 DOI Bib @conference{Bonfanti2024, author = {Bonfanti, Silvia and Gargantini, Angelo Michele}, booktitle = {Rigorous State-Based Methods. 10th International Conference, ABZ 2024, Bergamo, Italy, June 25–28, 2024, Proceedings}, title = {The Mechanical Lung Ventilator Case Study}, year = {2024}, pages = {281--288}, publisher = {Springer}, volume = {14759}, doi = {https://doi.org/10.1007/978-3-031-63790-2_23} } Integrating Product Sampling and Behavioral Testing for Software Product Lines with Combinatorial Testing Andrea Bombarda and Angelo Gargantini In 2024 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), May 2024 DOI Bib HTML Funding: ANTHEM @inproceedings{Bombarda2024i, title = {Integrating Product Sampling and Behavioral Testing for Software Product Lines with Combinatorial Testing}, volume = {27}, url = {http://dx.doi.org/10.1109/ICSTW60967.2024.00046}, doi = {10.1109/icstw60967.2024.00046}, booktitle = {2024 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW)}, publisher = {IEEE}, author = {Bombarda, Andrea and Gargantini, Angelo}, year = {2024}, month = may, pages = {197–206}, } Testing the Evolution of Feature Models with Specific Combinatorial Tests Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In 2024 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), May 2024 DOI Bib HTML Funding: ANTHEM @inproceedings{Bombarda2024h, title = {Testing the Evolution of Feature Models with Specific Combinatorial Tests}, url = {http://dx.doi.org/10.1109/ICSTW60967.2024.00025}, doi = {10.1109/icstw60967.2024.00025}, booktitle = {2024 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW)}, publisher = {IEEE}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, year = {2024}, month = may, pages = {1–10}, } From Concept to Code: Unveiling a Tool for Translating Abstract State Machines into Java Code Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In Rigorous State-Based Methods, May 2024 DOI Bib HTML Funding: ANTHEM @inproceedings{Bombarda2024g, title = {From Concept to Code: Unveiling a Tool for Translating Abstract State Machines into Java Code}, isbn = {9783031637902}, issn = {1611-3349}, url = {http://dx.doi.org/10.1007/978-3-031-63790-2_10}, doi = {10.1007/978-3-031-63790-2_10}, booktitle = {Rigorous State-Based Methods}, publisher = {Springer Nature Switzerland}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, year = {2024}, pages = {160–178}, } Integrated QoS- and Vulnerability-Driven Self-adaptation for Microservices Applications Matteo Camilli, Fabio Luccioletti, Raffaela Mirandola, and Patrizia Scandurra In Service-Oriented Computing - 22nd International Conference, ICSOC 2024, Tunis, Tunisia, December 3-6, 2024, Proceedings, Part II, Dec 2024 DOI Funding: SMIMI 2023 2023 Multi-thread Combinatorial Test Generation with SMT solvers Andrea Bombarda, Angelo Gargantini, and Andrea Calvagna In Proceedings of the 38th ACM/SIGAPP Symposium on Applied Computing, Tallin, Estonia, Dec 2023 Abs DOI Bib HTML Combinatorial interaction testing (CIT) is a testing technique that has proven to be effective in finding faults due to the interaction among inputs and in reducing the number of test cases, without losing effectiveness. Several tools have been proposed in the literature; however, generating tests remains a challenging task. In this paper, we present a technique for generating combinatorial test suites that uses a multi-thread architecture and exploits Satisfiability Modulo Theory (SMT) solvers to represent model parameters, constraints, and tuples, and it builds from SMT solver contexts the desired test suite. This technique is implemented by the tool KALI. The main advantage of using SMT solvers is that combinatorial models can contain all kinds of parameters and constraints. To evaluate our approach, we tested the impact of several optimizations and compared the performance of KALI with those of some existing tools for test generation. Our experiments confirm that the use of multi-threading is a promising technique but still requires some optimization for being more effective than the already available ones. @inproceedings{Bombarda2023, author = {Bombarda, Andrea and Gargantini, Angelo and Calvagna, Andrea}, title = {Multi-thread Combinatorial Test Generation with SMT solvers}, year = {2023}, isbn = {9781450395175}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, doi = {10.1145/3555776.3577703}, booktitle = {Proceedings of the 38th ACM/SIGAPP Symposium on Applied Computing}, numpages = {8}, location = {Tallin, Estonia}, series = {SAC '23}, url = {https://doi.org/10.1145/3555776.35777035}, } On the Reuse of Existing Configurations for Testing Evolving Feature Models Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In Proceedings of the 27th ACM International Systems and Software Product Line Conference - Volume B, Aug 2023 DOI Bib HTML @inproceedings{Bombarda2023d, doi = {10.1145/3579028.3609017}, year = {2023}, month = aug, publisher = {{ACM}}, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {On the Reuse of Existing Configurations for Testing Evolving Feature Models}, booktitle = {Proceedings of the 27th {ACM} International Systems and Software Product Line Conference - Volume B}, url = {https://doi.org/10.1145/3579028.3609017}, } Formal MVC: A Pattern for the Integration of ASM Specifications in UI Development Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In Rigorous State-Based Methods, Aug 2023 Abs DOI Bib HTML Using architectural patterns is of paramount importance for guaranteeing the correct functionality, maintainability and modularity, especially for complex software systems. The model-view-controller (MVC) pattern is typically used in user interfaces (UIs), since it allows the separation between the internal representation of the information and the way it is shown to users. The main problem of using this approach in a formal setting, where formal models are used to specify the requirements and prove safety properties, is that those models are not directly used within the MVC pattern and, thus, all the activities performed at model-level are somehow lost when implementing the UI. For this reason, in this paper, we present the formal MVC pattern (fMVC), an extension of the classical MVC where the model is a formal specification, written using Abstract State Machines. This pattern is supported by the AsmetaFMVCLib, which allows the user to link the formal model with the view and the controller by using simple Java annotations. We present the application of fMVC on a simple example of a calculator for explanatory purposes, then we apply it to the AMAN case study, which has inspired the definition of fMVC. We discuss the advantages of fMVC and its shortcomings, trying to identify the scenarios where it should be applied and possible alternatives. @inproceedings{Bombarda2023b, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, editor = {Gl{\\\"a}sser, Uwe and Creissac Campos, Jose and M{\\'e}ry, Dominique and Palanque, Philippe}, title = {Formal {MVC}: A Pattern for the Integration of ASM Specifications in UI Development}, booktitle = {Rigorous State-Based Methods}, year = {2023}, publisher = {Springer Nature Switzerland}, address = {Cham}, pages = {340--357}, isbn = {978-3-031-33163-3}, doi = {10.1007/978-3-031-33163-3_25}, url = {https://doi.org/10.1007/978-3-031-33163-3_25}, } A component framework for the runtime enforcement of safety properties Silvia Bonfanti, Elvinia Riccobene, and Patrizia Scandurra THE JOURNAL OF SYSTEMS AND SOFTWARE, Aug 2023 DOI Bib @article{10446_235472, author = {Bonfanti, Silvia and Riccobene, Elvinia and Scandurra, Patrizia}, title = {A component framework for the runtime enforcement of safety properties}, journal = {THE JOURNAL OF SYSTEMS AND SOFTWARE}, year = {2023}, volume = {198}, number = {art. 111605}, pages = {1--46}, doi = {https://doi.org/10.1016/j.jss.2022.111605}, } Modeling the MVM-Adapt System by Compositional I/O Abstract State Machines Silvia Bonfanti, Elvinia Riccobene, Davide Santandrea, and Patrizia Scandurra Aug 2023 DOI Bib Funding: MVM-Adapt @conference{10446_250709, author = {Bonfanti, Silvia and Riccobene, Elvinia and Santandrea, Davide and Scandurra, Patrizia}, title = {Modeling the MVM-Adapt System by Compositional I/O Abstract State Machines}, booktitle = {Rigorous State-Based Methods. 9th International Conference, ABZ 2023, Nancy, France, May 30–June 2, 2023, Proceedings}, publisher = {Springer Nature Switzerland AG}, year = {2023}, volume = {14010}, pages = {107--115}, doi = {https://doi.org/10.1007/978-3-031-33163-3_8}, } A Mobile Application for Milano Ventilatore Meccanico: A First Prototype Silvia Bonfanti, Angelo Michele Gargantini, and Luca Novelli Aug 2023 DOI Bib @conference{Bonfanti2023, author = {Bonfanti, Silvia and Gargantini, Angelo Michele and Novelli, Luca}, booktitle = {Proceedings of the 16th International Joint Conference on Biomedical Engineering Systems and Technologies (BIOSTEC 2023) Volume 5}, title = {A Mobile Application for Milano Ventilatore Meccanico: A First Prototype}, year = {2023}, pages = {314--321}, publisher = {SciTePress}, doi = {https://doi.org/10.5220/0011668400003414}, journal = {BIOSTEC} } 2022 2022 Evaluation of Algorithms to Measure a Psychophysical Threshold Using Digital Applications Silvia Bonfanti and Angelo Gargantini In Biomedical Engineering Systems and Technologies: 14th International Joint Conference, BIOSTEC 2021, Virtual Event, February 11–13, 2021, Revised Selected Papers, Aug 2022 DOI Bib @inproceedings{Bonfanti22, author = {Bonfanti, Silvia and Gargantini, Angelo}, booktitle = {Biomedical Engineering Systems and Technologies: 14th International Joint Conference, BIOSTEC 2021, Virtual Event, February 11–13, 2021, Revised Selected Papers}, title = {Evaluation of Algorithms to Measure a Psychophysical Threshold Using Digital Applications}, year = {2022}, address = {Cham}, pages = {139--157}, publisher = {Springer}, volume = {1710}, doi = {10.1007/978-3-031-20664-1_8}, isbn = {978-3-031-20663-4} } Automatic Test Generation with ASMETA for the Mechanical Ventilator Milano Controller Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In Testing Software and Systems, Aug 2022 Abs DOI Bib HTML This paper presents an automatic test cases generation method from Abstract State Machine specifications. Starting from the ASMETA specification, the proposed approach applies the following steps: 1. Generation of abstract tests from a ASMETA model; 2. Optimization of the abstract tests; 3. Concretization of the abstract tests in GoogleTest; 4. Execution of the concrete tests on code. We have applied this approach to the Mechanical Ventilator Milano (MVM) project, which our research group has contributed to develop, test, and certify during the Covid-19 pandemic. @inproceedings{Bombarda2022, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {Automatic Test Generation with~{ASMETA} for~the~Mechanical Ventilator Milano Controller}, booktitle = {Testing Software and Systems}, publisher = {Springer International Publishing}, year = {2022}, pages = {65--72}, doi = {10.1007/978-3-031-04673-5_5}, url = {https://doi.org/10.1007/978-3-031-04673-5_5}, } Robustness assessment and improvement of a neural network for blood oxygen pressure estimation Paolo Arcaini, Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Daniele Gamba, and Rita Pedercini In 2022 IEEE Conference on Software Testing, Verification and Validation (ICST), Apr 2022 Abs DOI Bib HTML Neural networks have been widely applied for performing tasks in critical domains, such as, for example, the medical domain; their robustness is, therefore, important to be guaranteed. In this paper, we propose a robustness definition for neural networks used for regression, by tackling some of the problems of existing robustness definitions. First of all, by following recent works done for classification problems, we propose to define the robustness of networks used for regression w.r.t. alterations of their input data that can happen in reality. Since different alteration levels are not always equally probable, the robustness definition is parameterized with the probability distribution of the alterations. The error done by this type of networks is quantifiable as the difference between the estimated value and the expected value; since not all the errors are equally critical, the robustness definition is also parameterized with a “tolerance” function that specifies how the error is tolerated. The current work has been motivated by the collaboration with the industrial partner that has implemented a medical sensor employing a Multilayer Perceptron for the estimation of the blood oxygen pressure. After having computed the robustness for the case study, we have successfully applied three techniques to improve the network robustness: data augmentation with recombined data, data augmentation with altered data, and incremental learning. All the techniques have proved to contribute to increasing the robustness, though in different ways. @inproceedings{Arcaini2022, author = {Arcaini, Paolo and Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Gamba, Daniele and Pedercini, Rita}, title = {Robustness assessment and improvement of a neural network for blood oxygen pressure estimation}, booktitle = {2022 {IEEE} Conference on Software Testing, Verification and Validation ({ICST})}, year = {2022}, month = apr, publisher = {{IEEE}}, doi = {10.1109/icst53961.2022.00040}, url = {https://doi.org/10.1109/icst53961.2022.00040}, } Guidelines for the development of a critical software under emergency Andrea Bombarda, Silvia Bonfanti, Cristiano Galbiati, Angelo Gargantini, Patrizio Pelliccione, Elvinia Riccobene, and Masayuki Wada Information and Software Technology, Sep 2022 Abs DOI Bib HTML Context: During the first wave of the COVID-19 pandemic, an international and heterogeneous team of scientists collaborated on a social project to produce a mechanical ventilator for intensive care units (MVM). MVM has been conceived to be produced and used also in poor countries: it is open-source, no patents, cheap, and can be produced with materials that are easy to retrieve. Objective: The objective of this work is to extract from the experience of the MVM development and software certification a set of lessons learned and then guidelines that can help developers to produce safety-critical devices in similar emergency situations. Method: We conducted a case study. We had full access to source code, comments on code, change requests, test reports, every deliverable (60 in total) produced for the software certification (safety concepts, requirements specifications, architecture and design, testing activities, etc.), notes, whiteboard sketches, emails, etc. We validated both lessons learned and guidelines with experts. Findings: We contribute a set of validated lessons learned and a set of validated guidelines, together with a discussion of benefits and risks of each guideline. Conclusion: In this work we share our experience in certifying software for healthcare devices produced under emergency, i.e. with strict and pressing time constraints and with the difficulty of establishing a heterogeneous development team made of volunteers. We believe that the guidelines will help engineers during the development of critical software under emergency. @article{Bombarda2022b, author = {Bombarda, Andrea and Bonfanti, Silvia and Galbiati, Cristiano and Gargantini, Angelo and Pelliccione, Patrizio and Riccobene, Elvinia and Wada, Masayuki}, journal = {Information and Software Technology}, title = {Guidelines for the development of a critical software under emergency}, year = {2022}, month = sep, pages = {107061}, doi = {10.1016/j.infsof.2022.107061}, publisher = {Elsevier {BV}}, url = {https://doi.org/10.1016/j.infsof.2022.107061} } Towards an Evaluation Framework for Autonomous Systems Andrea Bombarda, Silvia Bonfanti, Martina De Sanctis, Angelo Gargantini, Patrizio PelliccioneT, Elvinia Riccobene, and Patrizia Scandurra In 2022 IEEE International Conference on Autonomic Computing and Self-Organizing Systems Companion (ACSOS-C), Sep 2022 Abs DOI Bib HTML Despite the active and proficuous research in autonomous and self-adaptive systems of the last years, an evaluation framework to assess abilities related to adaption and to provide guidance to make a system smarter is still missing. In this paper, we perform the first steps towards an evaluation framework for autonomous systems to (i) make an assessment of a system from the perspective of its capacity to adapt and learn over time to handle new and unexpected conditions, (ii) explore and identify the possible pathways of improvement of the smart abilities (e.g., decisional autonomy, adaptability, perception, interaction, etc.) of a system, (iii) make a re-assessment when the improvement has been performed. @inproceedings{Bombarda2022c, author = {Bombarda, Andrea and Bonfanti, Silvia and Sanctis, Martina De and Gargantini, Angelo and PelliccioneT, Patrizio and Riccobene, Elvinia and Scandurra, Patrizia}, title = {Towards an Evaluation Framework for Autonomous Systems}, booktitle = {2022 {IEEE} International Conference on Autonomic Computing and Self-Organizing Systems Companion ({ACSOS}-C)}, year = {2022}, month = sep, publisher = {{IEEE}}, doi = {10.1109/acsosc56246.2022.00025}, url = {https://doi.org/10.1109/acsosc56246.2022.00025}, } RATE: A model-based testing approach that combines model refinement and test execution Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Yu Lei, and Feng Duan Software Testing, Verification and Reliability, Dec 2022 Abs DOI Bib HTML In this paper, we present an approach to conformance testing based on abstract state machines (ASMs) that combines model refinement and test execution (RATE) and its application to three case studies. The RATE approach consists in generating test sequences from ASMs and checking the conformance between code and models in multiple iterations. The process follows these steps: (1) model the system as an abstract state machine; (2) validate and verify the model; (3) generate test sequences automatically from the ASM model; (4) execute the tests over the implementation and compute the code coverage; (5) if the coverage is below the desired threshold, then refine the abstract state machine model to add the uncovered functionalities and return to step 2. We have applied the proposed approach in three case studies: a traffic light control system (TLCS), the IEEE 11073-20601 personal health device (PHD) protocol, and the mechanical ventilator Milano (MVM). By applying RATE, at each refinement level, we have increased code coverage and identified some faults or conformance errors for all the case studies. The fault detection capability of RATE has also been confirmed by mutation analysis, in which we have highlighted that, many mutants can be killed even by the most abstract models. @article{Bombarda2022d, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Lei, Yu and Duan, Feng}, title = {{RATE}: A model-based testing approach that combines model refinement and test execution}, journal = {Software Testing, Verification and Reliability}, year = {2022}, month = dec, doi = {10.1002/stvr.1835}, publisher = {Wiley}, url = {https://doi.org/10.1002/stvr.1835}, } Compositional Simulation of Abstract State Machines for Safety Critical Systems Silvia Bonfanti, Angelo Michele Gargantini, Elvinia Riccobene, and Patrizia Scandurra Dec 2022 Abs DOI Bib Model-based simulation is nowadays an accepted practice for reliable prototyping of system behavior. To keep requirements complexity under control, system components are specified by separate models, validated and verified in isolation from the rest, but models have to be subsequently integrated and validated as a whole. For this reason, engines for orchestrated simulation of separate models are extremely useful. In this paper, we present a compositional simulation technique for managing the co-execution of Abstract State Machines (ASMs) communicating through I/O events. The proposed method allows the co-simulation of ASM models of separate subsystems of a Discrete Event System in a straight-through processing manner according to a predefined orchestration schema. We also present our experience in applying and validating the proposed technique in the context of the MVM (Mechanical Ventilator Milano) system, a mechanical lung ventilator that has been designed, successfully certified, and deployed during the COVID-19 pandemic. @conference{10446_235471, author = {Bonfanti, Silvia and Gargantini, Angelo Michele and Riccobene, Elvinia and Scandurra, Patrizia}, title = {Compositional Simulation of Abstract State Machines for Safety Critical Systems}, booktitle = {Formal Aspects of Component Software. 18th International Conference, FACS 2022. Virtual Event, November 10–11, 2022. Proceedings}, publisher = {Springer Science and Business Media Deutschland GmbH}, year = {2022}, volume = {13712}, pages = {3--19}, doi = {https://doi.org/10.1007/978-3-031-20872-0_1}, } Parallel Test Generation for Combinatorial Models Based on Multivalued Decision Diagrams Andrea Bombarda and Angelo Gargantini In 2022 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), Apr 2022 Abs DOI Bib HTML Combinatorial interaction testing (CIT) is a testing technique that has proved to be effective in finding faults due to the interaction among inputs, and in reducing the number of test cases. One of the most crucial parts of combinatorial testing is the test generation for which many tools and algorithms have been proposed in recent years, with different methodologies and performances. However, generating tests remains a complex procedure that can require a lot of effort (mainly time). Thus, in this paper, we present the tool pMEDICI which aims to reduce the test generation time by parallelizing the generation process and exploiting the recent multithread hardware architectures. It uses Multivalued Decision Diagrams (MDDs) for representing the constraints and the tuples to be tested and extracts from them the t-wise test cases. Our experiments confirm that our tool requires a shorter amount of time for generating combinatorial test suites, especially for complex models, with a lot of parameters and constraints. @inproceedings{Bombarda2022a, author = {Bombarda, Andrea and Gargantini, Angelo}, title = {Parallel Test Generation for Combinatorial Models Based on Multivalued Decision Diagrams}, booktitle = {2022 {IEEE} International Conference on Software Testing, Verification and Validation Workshops ({ICSTW})}, year = {2022}, month = apr, publisher = {{IEEE}}, doi = {10.1109/icstw55395.2022.00027}, url = {https://doi.org/10.1109/icstw55395.2022.00027}, } 2021 2021 ROBY: a Tool for Robustness Analysis of Neural Network Classifiers Paolo Arcaini, Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In 2021 14th IEEE Conference on Software Testing, Verification and Validation (ICST), Apr 2021 Abs DOI Bib HTML Classification using Artificial Neural Networks (ANNs) is widely applied in critical domains, such as autonomous driving and in the medical practice; therefore, their validation is extremely important. A common approach consists in assessing the network robustness, i.e., its ability to correctly classify input data that is particularly challenging for classification. We recently proposed a robustness definition that considers input data degraded by alterations that may occur in reality; the approach was originally devised for image classification in the medical domain. In this paper, we extend the definition of robustness to any type of input for which some alterations can be defined. Then, we present ROBY, a tool for ROBustness analYsis of ANNs. The tool accepts different types of data (images, sounds, text, etc.) stored either locally or on Google Drive. The user can use some alterations provided by the tool, or define their own. The robustness computation can be performed either locally or remotely on Google Colab. The tool has been experimented for robustness computation of image and sound classifiers, used in the medical and automotive domains. @inproceedings{Arcaini2021, author = {Arcaini, Paolo and Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {{ROBY}: a Tool for Robustness Analysis of Neural Network Classifiers}, booktitle = {2021 14th {IEEE} Conference on Software Testing, Verification and Validation ({ICST})}, year = {2021}, month = apr, publisher = {{IEEE}}, doi = {10.1109/icst49551.2021.00057}, url = {https://doi.org/10.1109/icst49551.2021.00057}, } An environment for benchmarking combinatorial test suite generators Andrea Bombarda, Edoardo Crippa, and Angelo Gargantini In 2021 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), Apr 2021 Abs DOI Bib HTML New tools for combinatorial test generation are proposed every year. However, different generators may have different performances on different models, in terms of the number of tests produced and generation time, so the choice of which generator has to be used can be challenging. Classical comparison between CIT generators considers only the number of tests composing the test suite. Still, especially when the time dedicated to testing activity is limited, generation time can be determinant. Thus, we propose a benchmarking framework including 1) a set of generic benchmark models, 2) an interface to easily integrate new generators, 3) methods to benchmark each generator against the others and to check validity and completeness. We have tested the proposed environment using five different generators (ACTS, CAgen, CASA, Medici, and PICT), comparing the obtained results in terms of the number of test cases and generation times, errors, completeness, and validity. Finally, we propose a CIT competition, between combinatorial generators, based on our framework. @inproceedings{Bombarda2021, author = {Bombarda, Andrea and Crippa, Edoardo and Gargantini, Angelo}, title = {An environment for benchmarking combinatorial test suite generators}, booktitle = {2021 {IEEE} International Conference on Software Testing, Verification and Validation Workshops ({ICSTW})}, year = {2021}, month = apr, publisher = {{IEEE}}, doi = {10.1109/icstw52544.2021.00021}, url = {https://doi.org/10.1109/icstw52544.2021.00021}, } The ASMETA Approach to Safety Assurance of Software Systems Paolo Arcaini, Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Elvinia Riccobene, and Patrizia Scandurra In Logic, Computation and Rigorous Methods, Apr 2021 Abs DOI Bib HTML Safety-critical systems require development methods and processes that lead to provably correct systems in order to prevent catastrophic consequences due to system failure or unsafe operation. The use of models and formal analysis techniques is highly demanded both at design-time, to guarantee safety and other desired qualities already at the early stages of the system development, and at runtime, to address requirements assurance during the system operational stage. In this paper, we present the modeling features and analysis techniques supported by ASMETA (ASM mETAmodeling), a set of tools for the Abstract State Machines formal method. We show how the modeling and analysis approaches in ASMETA can be used during the design, development, and operation phases of the assurance process for safety-critical systems, and we illustrate the advantages of integrated use of tools as that provided by ASMETA. @incollection{Arcaini2021a, author = {Arcaini, Paolo and Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Riccobene, Elvinia and Scandurra, Patrizia}, title = {The {ASMETA} Approach to Safety Assurance of Software Systems}, booktitle = {Logic, Computation and Rigorous Methods}, publisher = {Springer International Publishing}, year = {2021}, pages = {215--238}, doi = {10.1007/978-3-030-76020-5_13}, url = {https://doi.org/10.1007/978-3-030-76020-5_13}, } Extending ASMETA with Time Features Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Elvinia Riccobene In Rigorous State-Based Methods, Apr 2021 Abs DOI Bib HTML ASMs and the ASMETA framework can be used to model and analyze a variety of systems, and many of them rely on time constraints. In this paper, we present the ASMETA extension to deal with model time features. @inproceedings{Bombarda2021a, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Riccobene, Elvinia}, title = {Extending {ASMETA} with Time Features}, booktitle = {Rigorous State-Based Methods}, publisher = {Springer International Publishing}, year = {2021}, pages = {105--111}, doi = {10.1007/978-3-030-77543-8_8}, url = {https://doi.org/10.1007/978-3-030-77543-8_8}, } Efficient Computation of Robustness of Convolutional Neural Networks Paolo Arcaini, Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In 2021 IEEE International Conference on Artificial Intelligence Testing (AITest), Aug 2021 Abs DOI Bib HTML Validation of CNNs is extremely important, especially when they are used in safety-critical domains. In particular, in the latest years, the focus of validation has been put on assessing the robustness of CNNs, i.e., their ability to correctly classify perturbed input data. A way to measure robustness is to check the network accuracy over many datasets obtained by altering the input data in different ways, but this is time and resource-consuming. In this paper, we present ASAP, a method to efficiently compute the robustness of a CNN, exploiting a parabola-based approximation which allows to adaptively select only relevant alteration levels. The method is tested on two different benchmarks (MNIST and breast cancer classification). Moreover, we compare ASAP with other techniques based on uniform sampling, numerical integration, and random sampling. @inproceedings{Arcaini2021b, author = {Arcaini, Paolo and Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {Efficient Computation of Robustness of Convolutional Neural Networks}, booktitle = {2021 {IEEE} International Conference on Artificial Intelligence Testing ({AITest})}, year = {2021}, month = aug, publisher = {{IEEE}}, doi = {10.1109/aitest52744.2021.00015}, url = {https://doi.org/10.1109/aitest52744.2021.00015}, } Lessons Learned from the Development of a Mechanical Ventilator for COVID-19 Andrea Bombarda, Silvia Bonfanti, Cristiano Galbiati, Angelo Gargantini, Patrizio Pelliccione, Elvinia Riccobene, and Masayuki Wada In 2021 IEEE 32nd International Symposium on Software Reliability Engineering (ISSRE), Oct 2021 Abs DOI Bib HTML During the COVID-19 pandemic, many researchers all over the world have offered their time and competencies to face the heavy consequences of the disease. This is the case of a group of physicists, engineers, and physicians that around the middle of March 2020 started to develop a simplified mechanical lung ventilator, called MVM (Mechanical Ventilator Milano), to answer the high request of ventilators for Acute Respiratory Distress Syndrome (ARDS) in intensive care units. A prototype was ready in around one month. Since medical software malfunctions can lead to injuries or death of patients, before marketing MVM ventilators and distributing them in hospitals, software certification in accordance with the IEC 62304 standard was mandatory to guarantee system reliability. The team was then complemented by computer scientists specifically devoted to this task. The software re-engineering process, which lasted around two months from the end of the prototype, brought to a strong re-implementation of the device software components, which involved all the stakeholders in a continuous integration setting. In this paper, we report the experience of the MVM control SW re-engineering necessary to show evidence that the SW adheres to the standards and to consequently obtain the certification. We share results and lessons learned from this social project, where more than 100 volunteer researchers worked towards software certification at the extreme of their strength to get a real device finished in a rush since strongly required to support physicians in treating COVID-19 patients. @inproceedings{Bombarda2021b, author = {Bombarda, Andrea and Bonfanti, Silvia and Galbiati, Cristiano and Gargantini, Angelo and Pelliccione, Patrizio and Riccobene, Elvinia and Wada, Masayuki}, title = {Lessons Learned from the Development of a Mechanical Ventilator for {COVID}-19}, booktitle = {2021 {IEEE} 32nd International Symposium on Software Reliability Engineering ({ISSRE})}, year = {2021}, month = oct, publisher = {{IEEE}}, doi = {10.1109/issre52982.2021.00016}, url = {https://doi.org/10.1109/issre52982.2021.00016}, } Developing a Prototype of a Mechanical Ventilator Controller from Requirements to Code with ASMETA Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, and Elvinia Riccobene In , Oct 2021 Abs DOI Bib HTML Rigorous development processes aim to be effective in developing critical systems, especially if failures can have catastrophic consequences for humans and the environment. Such processes generally rely on formal methods, which can guarantee, thanks to their mathematical foundation, model preciseness, and properties assurance. However, they are rarely adopted in practice. In this paper, we report our experience in using the Abstract State Machine formal method and the ASMETA framework in developing a prototype of the control software of the MVM (Mechanical Ventilator Milano), a mechanical lung ventilator that has been designed, successfully certified, and deployed during the COVID-19 pandemic. Due to time constraints and lack of skills, no formal method was applied for the MVM project. However, we here want to assess the feasibility of developing (part of) the ventilator by using a formal method-based approach. Our development process starts from a high-level formal specification of the system to describe the MVM main operation modes. Then, through a sequence of refined models, all the other requirements are captured, up to a level in which a C++ implementation of a prototype of the MVM controller is automatically generated from the model, and tested. Along the process, at each refinement level, different model validation and verification activities are performed, and each refined model is proved to be a correct refinement of the previous level. By means of the MVM case study, we evaluate the effectiveness and usability of our formal approach. @inproceedings{Bombarda2021c, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Riccobene, Elvinia}, title = {Developing a Prototype of a Mechanical Ventilator Controller from Requirements to Code with ASMETA}, date = {2021-11-16}, doi = {10.4204/EPTCS.349.2}, eprint = {http://arxiv.org/abs/2111.08204v1}, eprintclass = {cs.FL}, eprinttype = {arXiv}, file = {:http\\://arxiv.org/pdf/2111.08204v1:PDF}, journaltitle = {EPTCS 349, 2021, pp. 13-29}, keywords = {cs.FL, cs.SE}, url = {https://doi.org/10.4204/EPTCS.349.2}, year = {2021} } The novel Mechanical Ventilator Milano for the COVID-19 pandemic A. Abba, C. Accorsi, P. Agnes, E. Alessi, P. Amaudruz, A. Annovi, F. Ardellier Desages, and 229 more authors Physics of Fluids, Mar 2021 Abs DOI Bib HTML This paper presents the Mechanical Ventilator Milano (MVM), a novel intensive therapy mechanical ventilator designed for rapid, large-scale, low-cost production for the COVID-19 pandemic. Free of moving mechanical parts and requiring only a source of compressed oxygen and medical air to operate, the MVM is designed to support the long-term invasive ventilation often required for COVID-19 patients and operates in pressure-regulated ventilation modes, which minimize the risk of furthering lung trauma. The MVM was extensively tested against ISO standards in the laboratory using a breathing simulator, with good agreement between input and measured breathing parameters and performing correctly in response to fault conditions and stability tests. The MVM has obtained Emergency Use Authorization by U.S. Food and Drug Administration (FDA) for use in healthcare settings during the COVID-19 pandemic and Health Canada Medical Device Authorization for Importation or Sale, under Interim Order for Use in Relation to COVID-19. Following these certifications, mass production is ongoing and distribution is under way in several countries. The MVM was designed, tested, prepared for certification, and mass produced in the space of a few months by a unique collaboration of respiratory healthcare professionals and experimental physicists, working with industrial partners, and is an excellent ventilator candidate for this pandemic anywhere in the world. @article{Abba2021, author = {Abba, A. and Accorsi, C. and Agnes, P. and Alessi, E. and Amaudruz, P. and Annovi, A. and Desages, F. Ardellier and Back, S. and Badia, C. and Bagger, J. and Basile, V. and Batignani, G. and Bayo, A. and Bell, B. and Beschi, M. and Biagini, D. and Bianchi, G. and Bicelli, S. and Bishop, D. and Boccali, T. and Bombarda, A. and Bonfanti, S. and Bonivento, W. M. and Bouchard, M. and Breviario, M. and Brice, S. and Brown, R. and Calvo-Mozota, J. M. and Camozzi, L. and Camozzi, M. and Capra, A. and Caravati, M. and Carlini, M. and Ceccanti, A. and Celano, B. and Ruiz, J. M. Cela and Charette, C. and Cogliati, G. and Constable, M. and Crippa, C. and Croci, G. and Cudmore, S. and Dahl, C. E. and Molin, A. Dal and Daley, M. and Guardo, C. Di and D{\\textquotesingle}Avenio, G. and Davignon, O. and Tutto, M. Del and Ruiter, J. De and Devoto, A. and Maqueo, P. Diaz Gomez and Francesco, F. Di and Dossi, M. and Druszkiewicz, E. and Duma, C. and Elliott, E. and Farina, D. and Fernandes, C. and Ferroni, F. and Finocchiaro, G. and Fiorillo, G. and Ford, R. and Foti, G. and Fournier, R. D. and Franco, D. and Fricbergs, C. and Gabriele, F. and Galbiati, C. and Abia, P. Garcia and Gargantini, A. and Giacomelli, L. and Giacomini, F. and Giacomini, F. and Giarratana, L. S. and Gillespie, S. and Giorgi, D. and Girma, T. and Gobui, R. and Goeldi, D. and Golf, F. and Gorel, P. and Gorini, G. and Gramellini, E. and Grosso, G. and Guescini, F. and Guetre, E. and Hackman, G. and Hadden, T. and Hawkins, W. and Hayashi, K. and Heavey, A. and Hersak, G. and Hessey, N. and Hockin, G. and Hudson, K. and Ianni, A. and Ienzi, C. and Ippolito, V. and James, C. C. and Jillings, C. and Kendziora, C. and Khan, S. and Kim, E. and King, M. and King, S. and Kittmer, A. and Kochanek, I. and Kowalkowski, J. and Krücken, R. and Kushoro, M. and Kuula, S. and Laclaustra, M. and Leblond, G. and Lee, L. and Lennarz, A. and Leyton, M. and Li, X. and Liimatainen, P. and Lim, C. and Lindner, T. and Lomonaco, T. and Lu, P. and Lubna, R. and Lukhanin, G. A. and Luz{\\'{o}}n, G. and MacDonald, M. and Magni, G. and Maharaj, R. and Manni, S. and Mapelli, C. and Margetak, P. and Martin, L. and Martin, S. and Mart{\\'{\\i}}nez, M. and Massacret, N. and McClurg, P. and McDonald, A. B. and Meazzi, E. and Migalla, R. and Mohayai, T. and Tosatti, L. M. and Monzani, G. and Moretti, C. and Morrison, B. and Mountaniol, M. and Muraro, A. and Napoli, P. and Nati, F. and Natzke, C. R. and Noble, A. J. and Norrick, A. and Olchanski, K. and de Solorzano, A. Ortiz and Padula, F. and Pallavicini, M. and Palumbo, I. and Panontin, E. and Papini, N. and Parmeggiano, L. and Parmeggiano, S. and Patel, K. and Patel, A. and Paterno, M. and Pellegrino, C. and Pelliccione, P. and Pesudo, V. and Pocar, A. and Pope, A. and Pordes, S. and Prelz, F. and Putignano, O. and Raaf, J. L. and Ratti, C. and Razeti, M. and Razeto, A. and Reed, D. and Refsgaard, J. and Reilly, T. and Renshaw, A. and Retriere, F. and Riccobene, E. and Rigamonti, D. and Rizzi, A. and Rode, J. and Romualdez, J. and Russel, L. and Sablone, D. and Sala, S. and Salomoni, D. and Salvo, P. and Sandoval, A. and Sansoucy, E. and Santorelli, R. and Savarese, C. and Scapparone, E. and Schaubel, T. and Scorza, S. and Settimo, M. and Shaw, B. and Shawyer, S. and Sher, A. and Shi, A. and Skensved, P. and Slutsky, A. and Smith, B. and Smith, N. J. T. and Stenzler, A. and Straubel, C. and Stringari, P. and Suchenek, M. and Sur, B. and Tacchino, S. and Takeuchi, L. and Tardocchi, M. and Tartaglia, R. and Thomas, E. and Trask, D. and Tseng, J. and Tseng, L. and VanPagee, L. and Vedia, V. and Velghe, B. and Viel, S. and Visioli, A. and Viviani, L. and Vonica, D. and Wada, M. and Walter, D. and Wang, H. and Wang, M. H. L. S. and Westerdale, S. and Wood, D. and Yates, D. and Yue, S. and Zambrano, V.}, title = {The novel Mechanical Ventilator Milano for the {COVID}-19 pandemic}, journal = {Physics of Fluids}, year = {2021}, volume = {33}, number = {3}, pages = {037122}, month = mar, doi = {10.1063/5.0044445}, publisher = {{AIP} Publishing}, url = {https://doi.org/10.1063/5.0044445}, } Il successo di MVM, un progetto social e internazionale per realizzare un ventilatore polmonare Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Patrizio Pelliccione, and Elvinia Riccobene Il giornale dell’ingegnere, Jun 2021 Abs DOI Bib HTML La sua creazione ha visto la partecipazione di oltre 250 persone tra operatori sanitari, sviluppatori di software e ricercatori di Astrofisica delle particelle al Gran Sasso Science Institute dell’Aquila @article{Bombarda2021d, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Pelliccione, Patrizio and Riccobene, Elvinia}, title = {Il successo di MVM, un progetto social e internazionale per realizzare un ventilatore polmonare}, journal = {Il giornale dell'ingegnere}, year = {2021}, volume = {5}, pages = {13}, month = jun, issn = {1974-7144}, doi = {http://hdl.handle.net/10446/202112}, url = {http://hdl.handle.net/10446/202112}, } 2020 2020 Dealing with Robustness of Convolutional Neural Networks for Image Classification Paolo Arcaini, Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In 2020 IEEE International Conference On Artificial Intelligence Testing (AITest), Aug 2020 Abs DOI Bib HTML SW-based systems depend more and more on AI also for critical tasks. For instance, the use of machine learning, especially for image recognition, is increasing ever more. As state-of-the-art, Convolutional Neural Networks (CNNs) are the most adopted techniques for image classification. Although they are proved to have optimal results, it is not clear what happens when unforeseen modifications during the image acquisition and elaboration occur. Thus, it is very important to assess the robustness of a CNN, especially when it is used in a safety critical system, as, e.g., in the medical domain or in automated driving systems. Most of the analyses made about the robustness of CNNs are focused on adversarial examples which are created by exploiting the CNN internal structure; however, these are not the only problems we can encounter with CNNs and, moreover, they may be unlikely in some fields. This is why, in this paper, we focus on the robustness analysis when plausible alterations caused by an error during the acquisition of the input images occur. We give a novel definition of robustness w.r.t. possible input alterations for a CNN and we propose a framework to compute it. Moreover, we analyse four methods (data augmentation, limited data augmentation, network parallelization, and limited network parallelization) which can be used to improve the robustness of a CNN for image classification. Analyses are conducted over a dataset of histologic images. @inproceedings{Arcaini2020, author = {Arcaini, Paolo and Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {Dealing with Robustness of Convolutional Neural Networks for Image Classification}, booktitle = {2020 {IEEE} International Conference On Artificial Intelligence Testing ({AITest})}, year = {2020}, month = aug, publisher = {{IEEE}}, comment = {Best paper on AI-based testing}, doi = {10.1109/aitest49225.2020.00009}, url = {https://doi.org/10.1109/aitest49225.2020.00009}, } An Automata-Based Generation Method for Combinatorial Sequence Testing of Finite State Machines Andrea Bombarda and Angelo Gargantini In 2020 IEEE International Conference on Software Testing, Verification and Validation Workshops (ICSTW), Oct 2020 Abs DOI Bib HTML Combinatorial Interaction Testing has been applied to event-driven software systems by using as test suite a set of sequences of inputs in desired combinations. This is generally called combinatorial sequence testing (CST). CST requires possibly new system models from which tests are generated and new test generation methods (or an adaptation of the classical ones). Finite State Machines (FSMs) can easily represent event-based systems where certain inputs are valid only in some states and such constraints can be represented by the incompleteness of the FSM. In this paper, we propose an approach to CST where tests are generated from FSMs which are represented by automata together with test requirements. First, automata can be used to check if test sequences contain invalid inputs. We propose three methods to repair tests with invalid inputs. Moreover, we can directly embed into automata the system constraints over the inputs during generations, to generate only valid test sequences. We compare our automata-based method with the standard approach of Sequences Covering Arrays (SCAs) that produces a set of sequences, all with the same length, composed by the permutation of all the events supported by the system. We found that generating only valid tests from automata provides several advantages iv.r.t. repairing tests and SCAs. @inproceedings{Bombarda2020, author = {Bombarda, Andrea and Gargantini, Angelo}, title = {An Automata-Based Generation Method for Combinatorial Sequence Testing of Finite State Machines}, booktitle = {2020 {IEEE} International Conference on Software Testing, Verification and Validation Workshops ({ICSTW})}, year = {2020}, month = oct, publisher = {{IEEE}}, doi = {10.1109/icstw50294.2020.00036}, url = {https://doi.org/10.1109/icstw50294.2020.00036}, } 2019 2019 Developing Medical Devices from Abstract State Machines to Embedded Systems: A Smart Pill Box Case Study Andrea Bombarda, Silvia Bonfanti, and Angelo Gargantini In Software Technology: Methods and Tools, Oct 2019 Abs DOI Bib HTML The development of medical devices is a safety-critical process, because a failure or a malfunction of the device can cause serious injuries to the patients whom use it. The application of a rigorous process for their development reduces the risk of failures since validation and verification activities can be performed in a objective, reproducible, and documentable manner. In this paper we present an approach based on the Abstract State Machine (ASM) formal method. Starting from the model, validation and verification (V\u0026amp;V) techniques can be applied. Furthermore, by step-wise refinement, a final model can be obtained, which can be automatically translated to code. The process is applied to the smart pill box case study. Starting from the ASM model, we generate code for the Arduino platform after the application of V\u0026amp;V activities. Furthermore, we introduce regulation (IEC62304) and guidelines (FDA General Principles of Software Validation) that support the developer in medical software development. In particular, we explain how ASMs formal process can be compliant with them. @inproceedings{Bombarda2019, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo}, title = {Developing Medical Devices from Abstract State Machines to Embedded Systems: A Smart Pill Box Case Study}, booktitle = {Software Technology: Methods and Tools}, publisher = {Springer International Publishing}, year = {2019}, pages = {89--103}, comment = {Best student paper award}, doi = {10.1007/978-3-030-29852-4_7}, url = {https://doi.org/10.1007/978-3-030-29852-4_7}, } Combining Model Refinement and Test Generation for Conformance Testing of the IEEE PHD Protocol Using Abstract State Machines Andrea Bombarda, Silvia Bonfanti, Angelo Gargantini, Marco Radavelli, Feng Duan, and Yu Lei In Testing Software and Systems, Oct 2019 Abs DOI Bib HTML In this paper we propose a new approach to conformance testing based on Abstract State Machine (ASM) model refinement. It consists in generating test sequences from ASM models and checking the conformance between code and models in multiple iterations. This process is applied at different models, starting from the more abstract model to the one that is very close to the code. The process consists of the following steps: (1) model the system as an Abstract State Machine, (2) generate test sequences based on the ASM model, (3) compute the code coverage using generated tests, (4) if the coverage is low refine the Abstract State Machine and return to step 2. We have applied the proposed approach to Antidote, an open-source implementation of IEEE 11073-20601 Personal Health Device (PHD) protocol which allows personal healthcare devices to exchange data with other devices such as small computers and smartphones. @inproceedings{Bombarda2019a, author = {Bombarda, Andrea and Bonfanti, Silvia and Gargantini, Angelo and Radavelli, Marco and Duan, Feng and Lei, Yu}, title = {Combining Model Refinement and Test Generation for Conformance Testing of the {IEEE} {PHD} Protocol Using Abstract State Machines}, booktitle = {Testing Software and Systems}, publisher = {Springer International Publishing}, year = {2019}, pages = {67--85}, doi = {10.1007/978-3-030-31280-0_5}, url = {https://doi.org/10.1007/978-3-030-31280-0_5}, }",
          section: "Pages",
          url: "/publications/"
        },
      
    
  
    
      
        {
          title: "Tools",
          description: "Software for modelling, verification, and testing, developed by our group.",
          text: "{% assign sorted_projects = site.tools | sort: 'importance' %} {% for project in sorted_projects %} {% include lab_collection_card.liquid %} {% endfor %}",
          section: "Pages",
          url: "/tools/"
        },
      
    
  
  
    
  
    
  
    
  
    
  
    
      
        
          
            {
              title: "ANTHEM",
              description: "AdvaNced Technologies for Human-centrEd Medicine",
              text: "The project is aimed at developing technologies to improve the diagnosis and treatment of chronic diseases, with the goal of having a short-term impact on patients belonging to well-defined reference communities. In particular, the project aims to create digital devices and tools for data collection in support of personalized and proximity medicine solutions; develop remote monitoring and treatment tools; evaluate the importance and impact of environmental factors and lifestyle in the development of chronic pathologies in fragile populations; implement oncological therapy methods for tumors that cannot be treated with conventional approaches. UniBg is the leader of Spoke 1 dedicated to the development of data-driven diagnostic and therapy methods based on artificial intelligence technologies. Partners University of Bergamo: Andrea Bombarda, Domenico Fabio Savo University of Milano-Bicocca University of Messina University of Campania - Luigi Vanvitelli ASST Papa Giovanni XXIII* ASST Bergamo EST (Bolognini Hospital) ASST Monza (San Gerardo Hospital) Fondazione Europea Ricerca Biomedica Onlus Istituto Mario Negri Diapath",
              section: "Projects",
              
                url: "/projects/ANTHEM/"
              
            },
          
        
          
            {
              title: "MVM ADAPT",
              description: "Bringing adaptation to ventilators",
              text: "The MVM-Adapt project, with the italian title: Milano Ventilatore Meccanico Adattativo in presenza d’incertezza is a research project funded by the Italin Ministry of Research and University under the program FISR 2020 COVID. MVM-Adapt aims at increasing operability and robustness of the MVM by exploiting the paradigm of Self Adaptive Software. The new MVM control software will be able to monitor its operation and uncertain environmental conditions (e.g., the health status of patients), and to adapt its operation according to precise safety and health requirements of the patient. It builds on the existing MVM project (https://mvm.care) which had the goal to minimize the time and the costs required to get a lung ventilator designed, certified, manufactured, and distributed during the COVID emergency see. Partners University of Bergamo: Angelo Gargantini, Patrizia Scandurra, Silvia Bonfanti, and Andrea Bombarda Gran Sasso Science Institute: Catia Trubiani, Patrizio Pelliccione, and Martina De Sanctis University of Milan: Elvinia Riccobene",
              section: "Projects",
              
                url: "/projects/MVM_Adapt/"
              
            },
          
        
          
            {
              title: "QUASMED",
              description: "Quality of Medical Software",
              text: "Medical software is critical since can cause injuries or, in some cases, the dead of patients. The projects aims to analyse different factors to guarantee the good quality of software. Partners University of Bergamo: Angelo Gargantini, Andrea Bombarda, Silvia Bonfanti, Marco Radavelli University of Texas at Arlington: Yu Lei, Feng Duan",
              section: "Projects",
              
                url: "/projects/QUASMED/"
              
            },
          
        
          
            {
              title: "SAFEST",
              description: "Trust assurance of Digital Twins for medical CPSs",
              text: "A Digital Twin (DT) is a machine-processable high-fidelity virtual representation of a physical system, called Physical Twin (PT), to which it is coupled through a continuous, bidirectional flow of data (e.g., monitored data and results of predictive/prescriptive analysis). The DT paradigm has emerged as a suitable way to cope with the complexity of analyzing, designing, implementing, controlling, and adapting complex systems belonging to diverse domains such as cyber-physical, business, and societal systems. In the context of Medical Cyber-Physical Systems (MCPSs), which are critical, interconnected, distributed and context-aware systems of devices used in medicine, DTs can simulate physical devices and specific machinery pieces to provide more informed and real-time relevant healthcare responses, enable decision making and assess risks for the patients; training medical staff is a further highly required application of DTs for MCPSs. However, the DT paradigm is not fully implemented in the medical setting. The complexity of the modeling of human behaviors and workflows, the presence of uncertainty, and the need for security guarantees for sensitive information (e.g., patient personal medical profiles) are barriers to the adoption of DTs. In this context, the SAFEST (truSt Assurance) project aims at improving the application and soundness of DT-based of digital twins For mEdical cyber-phySical sysTems methodologies and tools. To win this challenge, SAFEST identifies and focuses on two main goals: taming the complexity caused by the heterogeneity of the DT components that must be built, operated, coordinated, and evolved together with their physical and human counterparts; increasing the level of trust in the results and indications coming from a DT, despite modeling approximations and uncertainties caused by incomplete or imprecise data collected in the field. SAFEST intends to go beyond the usual interpretation of trust, commonly defined in terms of security and privacy, and takes into account a broader set of dimensions, including performance, dependability, safety, and conformance to required behavior. SAFEST will pursue these two goals by articulating them in the following two objectives: O1: Modeling notations for evolving heterogeneous systems with uncertainty (multi-view, multi-paradigm, multi-dimensional, O1 multi-disciplinary models); O2: Trust assurances (behavioral conformance, safety, dependability, security, performance). O2 The suitability and effectiveness of the proposed methods and tools will be evaluated through a case study in the medical domain. Scientific goals of the SAFEST project are in line with the following missions of the Italian national plan on Recovery and Resilience (PNRR), more precisely mission 1.2 “Digitisation, innovation and competitiveness of the production system”, mission 6.2 “Innovation, research and digitisation of healthcare”, and mission 4.2 “From research to business”. Partners University of Bergamo: Angelo Gargantini (PI), Patrizia Scandurra, Silvia Bonfanti Politecnico di Milano: Marcello Bersani (co-PI), Matteo Camilli, Livia Lestingi University of Milano: Elvinia Riccobene (unit leader), Stelvio Cimato, Chiara Braghin website https://safest-prin.github.io/",
              section: "Projects",
              
                url: "/projects/Safest/"
              
            },
          
        
          
            {
              title: "CHANGES",
              description: "Cultural Heritage Active Innovation for Sustainable Society",
              text: "The PE CHANGES project is funded by the European Union through NextGenerationEU under Italy’s National Recovery and Resilience Plan (PNRR), Mission 4, Component 2, Investment 1.3. CHANGES – Cultural Heritage Active Innovation for Sustainable Society aims to support teaching and scientific and technological research in cultural heritage, culture, and the protection of historical and cultural heritage. https://sites.google.com/uniroma1.it/changes/",
              section: "Projects",
              
                url: "/projects/changes/"
              
            },
          
        
      
    
  
    
      
        
          
            {
              title: "Asmeta",
              description: "A framework for the Abstract State Machines (ASMs) formal method.",
              text: "",
              section: "Tools",
              
                url: "https://asmeta.github.io/"
              
            },
          
        
          
            {
              title: "ctwedge",
              description: "Combinatorial Testing Web-based Editor and Generator",
              text: "",
              section: "Tools",
              
                url: "https://foselab.unibg.it/ctwedge/"
              
            },
          
        
          
            {
              title: "mutrex",
              description: "MutRex: a mutation-based test generator  for regex",
              text: "",
              section: "Tools",
              
                url: "https://github.com/fmselab/mutrex"
              
            },
          
        
          
            {
              title: "ROBY",
              description: "ROBustness analYzer for neural networks.",
              text: "",
              section: "Tools",
              
                url: "https://github.com/fmselab/roby"
              
            },
          
        
      
    
  
  
    
    
    {
      title: "Angelo Gargantini",
      description: "Full Professor",
      text: "faculty",
      section: "People",
      url: "/people/#angelo-gargantini"
    },
  
    
    
    {
      title: "Patrizia Scandurra",
      description: "Associate Professor",
      text: "faculty",
      section: "People",
      url: "/people/#patrizia-scandurra"
    },
  
    
    
    {
      title: "Claudio Menghi",
      description: "Associate Professor",
      text: "faculty",
      section: "People",
      url: "/people/#claudio-menghi"
    },
  
    
    
    {
      title: "Silvia Bonfanti",
      description: "Assistant Professor (RTT)",
      text: "faculty",
      section: "People",
      url: "/people/#silvia-bonfanti"
    },
  
    
    
    {
      title: "Andrea Bombarda",
      description: "Researcher (RTD-A)",
      text: "researcher",
      section: "People",
      url: "/people/#andrea-bombarda"
    },
  
    
    
    {
      title: "César Cornejo",
      description: "Postdoc",
      text: "postdoc",
      section: "People",
      url: "/people/#c%C3%A9sar-cornejo"
    },
  
    
    
    {
      title: "Asma Taheri Monfared",
      description: "Postdoc",
      text: "former",
      section: "People",
      url: "/people/#asma-taheri-monfared"
    },
  
    
    
    {
      title: "Nicola Zeni",
      description: "Researcher (RTD-A)",
      text: "former",
      section: "People",
      url: "/people/#nicola-zeni"
    },
  
    
    
    {
      title: "Nico Pellegrinelli",
      description: "PhD Student",
      text: "phd",
      section: "People",
      url: "/people/#nico-pellegrinelli"
    },
  
    
    
    {
      title: "Aurora Zanenga",
      description: "PhD Student",
      text: "phd",
      section: "People",
      url: "/people/#aurora-zanenga"
    },
  
    
    
    {
      title: "Marco Radavelli",
      description: "PhD (2019)",
      text: "former",
      section: "People",
      url: "/people/#marco-radavelli"
    },
  
    
    
    {
      title: "Paolo Vavassori",
      description: "PhD (2017)",
      text: "former",
      section: "People",
      url: "/people/#paolo-vavassori"
    },
  
    
    
    {
      title: "Elvinia Riccobene",
      description: "University of Milan, Milan, Italy",
      text: "collaborators",
      section: "People",
      url: "/people/#elvinia-riccobene"
    },
  
    
    
    {
      title: "Paolo Arcaini",
      description: "Simula Research Laboratory, Oslo, Norway",
      text: "collaborators",
      section: "People",
      url: "/people/#paolo-arcaini"
    },
  
    
    
    {
      title: "Lionel C. Briand",
      description: "University of Ottawa, Ottawa, Canada; Research Ireland Lero Centre, University of Limerick, Limerick, Ireland",
      text: "collaborators",
      section: "People",
      url: "/people/#lionel-c-briand"
    },
  
    
    
    {
      title: "Marsha Chechik",
      description: "University of Toronto, Toronto, Canada",
      text: "collaborators",
      section: "People",
      url: "/people/#marsha-chechik"
    },
  
    
    
    {
      title: "Matteo Camilli",
      description: "Politecnico di Milano, Milan, Italy",
      text: "collaborators",
      section: "People",
      url: "/people/#matteo-camilli"
    },
  
    
    
    {
      title: "Nico Pellegrinelli",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#nico-pellegrinelli"
    },
  
    
    
    {
      title: "Alessandro Colombo",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#alessandro-colombo"
    },
  
    
    
    {
      title: "Gionatha Pirola",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#gionatha-pirola"
    },
  
    
    
    {
      title: "Nunzio Marco Bisceglia",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#nunzio-marco-bisceglia"
    },
  
    
    
    {
      title: "Aurora Zanenga",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#aurora-zanenga"
    },
  
    
    
    {
      title: "Isaac Maffeis",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#isaac-maffeis"
    },
  
    
    
    {
      title: "Daniele Beretta",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#daniele-beretta"
    },
  
    
    
    {
      title: "Stefano Gregis",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#stefano-gregis"
    },
  
    
    
    {
      title: "Luca Cavagnis",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#luca-cavagnis"
    },
  
    
    
    {
      title: "Federico Imberti",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#federico-imberti"
    },
  
    
    
    {
      title: "Sabrin Maatoug",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#sabrin-maatoug"
    },
  
    
    
    {
      title: "Simone Ronzoni",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#simone-ronzoni"
    },
  
    
    
    {
      title: "Arash Abedi",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#arash-abedi"
    },
  
    
    
    {
      title: "Tommaso Garbin",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#tommaso-garbin"
    },
  
    
    
    {
      title: "Claudio Borsani",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#claudio-borsani"
    },
  
    
    
    {
      title: "Daniele Greco",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#daniele-greco"
    },
  
    
    
    {
      title: "Andrea Rota",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#andrea-rota"
    },
  
    
    
    {
      title: "Luca Carminati",
      description: null,
      text: "master",
      section: "People",
      url: "/people/#luca-carminati"
    },
  
];
