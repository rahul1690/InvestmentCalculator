import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";
export default function Result({ ...parameters }) {
    const results = calculateInvestmentResults(parameters)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.annualInvestment)}</td>
                        <td>{formatter.format(+parameters.initialInvestment + +(parameters.annualInvestment * (index + 1)))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}