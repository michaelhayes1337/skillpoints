using MHRM.Domain.Extensions;
using System.Reflection;

namespace CSharp
{
    public enum DocumentTypePanelMember
    {
        [StringValue("Registration Form")]
        RegistrationForm = 1,
        [StringValue("Proof of Tax")]
        ProofOfTax = 2,
        [StringValue("Bank Details")]
        BankDetails = 3,
        [StringValue("Leave Option Preferences")]
        LeaveOptionPreferences = 4,
        [StringValue("Salary Deduction Agreement")]
        SalaryDeductionAgreement = 5,
        [StringValue("Confidential Information Consent")]
        ConfidentialInformationConsent = 6,
        [StringValue("Malpractice Indemnity Certificate")]
        MalpracticeIndemnityCertificate = 7,
        [StringValue("Identification Document")]
        IdentificationDocument = 8,
        [StringValue("Passport")]
        Passport = 9,
        [StringValue("Work Permit Foreigner")]
        WorkPermitForeigner = 10,
        [StringValue("Driver's License")]
        DriversLicense = 11,
        [StringValue("ID Photo")]
        IDPhoto = 12,
        [StringValue("Marriage Certificate")]
        MarriageCertificate = 13,
        [StringValue("Divorce Certificate")]
        DivorceCertificate = 14,
        [StringValue("CPG Certificate")]
        CPGCertificate = 15,
        [StringValue("Trauma Certificate")]
        TraumaCertificate = 16,
        [StringValue("Confirmation Letter")]
        ConfirmationLetter = 17,
        [StringValue("Assessment Outcome")]
        AssessmentOutcome = 18,
        [StringValue("Data Privacy Disclosure")]
        DataPrivacyDisclosure = 19,
        [StringValue("Vulnerable Person Questionnaire")]
        VulnerablePersonQuestionnaire = 20,
        [StringValue("Service Level Agreement")]
        ServiceLevelAgreement = 21,
        [StringValue("Maternity Leave Supporting Document")]
        MaternityLeaveSupportingDocument = 22,
        [StringValue("UIF Dependants Form")]
        UIFDependantsForm = 23,
        [StringValue("Client Orientation Outcome")]
        ClientOrientationOutcome = 24,
        [StringValue("Incident Report")]
        IncidentReport = 25,
        [StringValue("Visa")]
        Visa = 26,
        [StringValue("Personal Information")]
        PersonalInformation = 27,
        [StringValue("ID Document")]
        IDDocument = 28,
        [StringValue("Qualification Certificate")]
        QualificationCertificate = 29,
        [StringValue("Certificate")]
        Certificate = 30,
        [StringValue("Grievance Letter")]
        GrievanceLetter = 31,
        [StringValue("Redundancy/ Retirement Letter")]
        RedundancyRetirementLetter = 32,
        [StringValue("Acceptance Letter")]
        AcceptanceLetter = 33,
        [StringValue("Clearance Form")]
        ClearanceForm = 34,
        [StringValue("Final Settlement Letter")]
        FinalSettlementLetter = 35,
        [StringValue("General")]
        General = 36,
        [StringValue("Personal Training")]
        PersonalTraining = 37
    };
    internal class Program
    {
        static void Main(string[] args)
        {
            foreach (var item in Enum.GetValues(typeof(DocumentTypePanelMember)))
            {
                var memberInfo = typeof(DocumentTypePanelMember).GetMember(item.ToString()).FirstOrDefault();

                if (memberInfo != null)
                {
                    // Assuming StringValueAttribute is a custom attribute you've defined.
                    StringValueAttribute attribute = memberInfo.GetCustomAttribute<StringValueAttribute>();

                    if (attribute != null)
                    {
                        string description = attribute.StringValue.Replace("'", "''");
                        int value = (int)item;

                        Console.WriteLine($"id: {value}, name: {description}");
                    }
                }
            }
        }
    }
}