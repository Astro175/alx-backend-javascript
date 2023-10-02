function guardrail(math_function) {
    let queue = [];
    try {
        const value = math_function();
        queue.push(value);
    }
    catch(e) {
        queue.push(`Error: ${e.message}`);
    }
    finally {
        queue.push("Guardrail was processed");
    }
    return queue;
}
module.exports = guardrail;