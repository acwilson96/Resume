const Alexander = `
#include "Person.h"
#include &lt;ctime>
#include &lt;vector>
#include &lt;string>

/* c++ Class representing a bit of me */
class Alexander : public Person {

        std::time_t unix_dob;
        const std::string name             = "Alexander Wilson";
        const std::string email            = "acwilson96@gmail.com";
        std::string degree                 = "BSc Computer Science";
        std::string university             = "University of Edinburgh";
        std::string location               = "Edinburgh / London";

        std::vector&lt;std::string> interests = {
            "Computer Architecture", "Code Optimisation",
            "Compilers", "Parallel Architectures/Systems"
        };

        Alexander() : unix_dob(822873600) {} // Constructed on 29-01-1996
        
        // Convert time in seconds to years.
        int getAge() const {
            std::time_t seconds_alive = std::time(0) - unix_dob;
            return seconds_alive / (60 * 60 * 24 * 365);
        }
};
`;

export default Alexander;