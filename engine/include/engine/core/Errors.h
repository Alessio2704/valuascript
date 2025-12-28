#pragma once

enum class EngineErrc
{
    UnknownError,
    UnknownFunction,
    MismatchedArgumentType,
    IndexOutOfBounds,
    OutputFileWriteFailed,

    DivisionByZero,
    LogOfNonPositive,
    InvalidPowerOperation,

    VectorSizeMismatch,
    EmptyVectorOperation,

    ConditionNotBoolean,
    LogicalOperatorRequiresBoolean,

    InvalidSamplerParameters,

    CsvFileNotFound,
    CsvColumnNotFound,
    CsvRowIndexOutOfBounds,
    CsvConversionError,
    RecipeFileNotFound,
    RecipeParseError,
    RecipeConfigError,

    IncorrectArgumentCount
};